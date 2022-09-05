import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Card, cards } from 'src/app/interfaces/type';
import { GameUtilityService } from 'src/app/services/game-utility/game-utility.service';

@Component({
  selector: 'app-perfect-strat-practice',
  templateUrl: './perfect-strat-practice.component.html',
  styleUrls: ['./perfect-strat-practice.component.css']
})
export class PerfectStratPracticeComponent implements OnInit {

  gameModeForm!: FormGroup;
  deckNumber: number = 0
  deck: Card[] = []
  dealerCards: Card[] = []
  playerCards: Card[][] = []
  perfectStratIndices: boolean[] = []
  gameStarted: boolean = false;
  cardCount: number = 0
  showCardCount: boolean = false;
  gameMode: string = ''

  constructor(
    private fb: FormBuilder,
    private gameUtilityService: GameUtilityService
  ) {
    this.gameModeForm = this.fb.group({
      players: '',
      mode: ''
    });
  }

  ngOnInit(): void { }

  shuffle() {
    for (let i = this.deck.length - 1; i >= 0; i--) {
      const tmpIdx = this.getRandomInt(i + 1);
      const tmpVal = this.deck[tmpIdx];
      this.deck[tmpIdx] = this.deck[i];
      this.deck[i] = tmpVal;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  startGame(playerCount: number, gameMode: string) {
    this.gameMode = gameMode;
    this.deck = cards
    this.shuffle()

    for (let i = 0; i < playerCount; i++) {
      this.perfectStratIndices.push(false)
    }

    for (let i = 0; i < playerCount; i++) {
      this.playerCards.push(
        [this.deck[this.deckNumber += 1]]
      )
      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }

    this.addDealerCard(true)

    for (let i = 0; i < playerCount; i++) {
      if (this.gameMode === 'Pairs') {
        this.playerCards[i].push(
          this.getPair(this.playerCards[i])
        )
      } else if (this.gameMode === 'Normal') {
        this.playerCards[i].push(
          this.deck[this.deckNumber += 1]
        )
      }

      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }

    this.gameStarted = true;
  }

  addDealerCard(addDealerCard: boolean) {
    if (addDealerCard === true) {
      this.dealerCards.push(this.deck[this.deckNumber += 1])
      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])

    }
  }

  addPlayerCard(playerIndex: number) {
    this.playerCards[playerIndex].push(this.deck[this.deckNumber += 1])
    this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])

  }

  togglePerfectStrategy(playerIndex: number) {
    this.perfectStratIndices[playerIndex] = !this.perfectStratIndices[playerIndex]
  }

  clearPerfectStratIndices() {
    for (let i = 0; i < this.perfectStratIndices.length; i++) {
      this.perfectStratIndices[i] = false;
    }
  }

  perfectStrategy(playerIndex: number) {
    return this.gameUtilityService.perfectStratFirstHand(this.playerCards[playerIndex])
  }

  dealCards() {
    this.dealerCards = []

    for (let i = 0; i < this.playerCards.length; i++) {
      this.playerCards[i] = []
    }

    this.clearPerfectStratIndices()

    for (let i = 0; i < this.playerCards.length; i++) {
      this.playerCards[i].push(
        this.deck[this.deckNumber += 1]
      )
      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])

    }

    this.addDealerCard(true)

    for (let i = 0; i < this.playerCards.length; i++) {
      if (this.gameMode === 'Pairs') {
        this.playerCards[i].push(
          this.getPair(this.playerCards[i])
        )
      } else if (this.gameMode === 'Normal') {
        this.playerCards[i].push(
          this.deck[this.deckNumber += 1]
        )
      }

      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])

    }
  }

  toggleCardCount() {
    this.showCardCount = !this.showCardCount
  }

  getCardCount() {
    return this.cardCount
  }

  getPair(cards: Card[]): Card {

    let tempCard: Card = {
      name: '',
      value: 0,
      valueHigh: 0,
      imgSrc: ''
    };

    for (let i = 0; i < this.deck.length; i++) {
      if (this.deck[i].name === cards[0].name) {
        tempCard = this.deck[i]
        break
      }
    }

    return tempCard

  }


}
