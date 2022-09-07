import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { aces, Card, cards, cardsNoAces } from 'src/app/interfaces/type';
import { GameUtilityService } from 'src/app/services/game-utility/game-utility.service';
declare var $: any

@Component({
  selector: 'app-perfect-strat-practice',
  templateUrl: './perfect-strat-practice.component.html',
  styleUrls: ['./perfect-strat-practice.component.css']
})
export class PerfectStratPracticeComponent implements OnInit {

  //$('#myModal').modal('show')


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

  aces: Card[] = []
  deckNoAces: Card[] = []


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

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  startGame(playerCount: number, gameMode: string) {
    this.gameMode = gameMode;
    if(this.gameMode === 'Normal' || this.gameMode === 'Pairs') {
      this.deck = cards
    } else if(this.gameMode === 'Soft totals') {
      this.deck = cardsNoAces
      this.aces = aces      
    }
    this.shuffle()

    for (let i = 0; i < playerCount; i++) {
      this.perfectStratIndices.push(false)
    }

    for (let i = 0; i < playerCount; i++) {
      if (this.gameMode === 'Normal' || this.gameMode === 'Pairs') {
        this.playerCards.push(
          [this.deck[this.deckNumber += 1]]
        )
      } else if (this.gameMode === 'Soft totals') {
        this.playerCards.push(
          [this.aces[this.getRandomInt(4)]]
        )
      }
      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }

    this.addDealerCard(true)

    for (let i = 0; i < playerCount; i++) {
      if (this.gameMode === 'Pairs') {
        this.playerCards[i].push(
          this.getPair(this.playerCards[i])
        )
      } else if (this.gameMode === 'Normal' || this.gameMode === 'Soft totals') {
        this.playerCards[i].push(
          this.deck[this.deckNumber += 1]
        )
      }
      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }
    this.gameStarted = true;
  }

  dealCards() {    
    this.dealerCards = []

    for (let i = 0; i < this.playerCards.length; i++) {
      this.playerCards[i] = []
    }

    this.clearPerfectStratIndices()

    for (let i = 0; i < this.playerCards.length; i++) {
      if (this.gameMode === 'Normal' || this.gameMode === 'Pairs') {        
        this.playerCards[i].push(
          this.deck[this.deckNumber += 1]
        )
      } else if (this.gameMode === 'Soft totals') {
        this.playerCards[i].push(
          this.aces[this.getRandomInt(4)]
        )
      }

      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }

    this.addDealerCard(true)

    for (let i = 0; i < this.playerCards.length; i++) {
      if (this.gameMode === 'Pairs') {
        this.playerCards[i].push(
          this.getPair(this.playerCards[i])
        )
      } else if (this.gameMode === 'Normal' || this.gameMode === 'Soft totals') {
        this.playerCards[i].push(
          this.deck[this.deckNumber += 1]
        )
      }

      this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckNumber])
    }
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


  toggleModal(state: string) {
    $('#chartModal').modal(`${state}`)
  }


}
