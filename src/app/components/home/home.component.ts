import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card, cards } from 'src/app/interfaces/type';
import { GameUtilityService } from 'src/app/services/game-utility/game-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  gameModeForm!: FormGroup;

  cards: Card[] = []
  cardsPlayed: Card[] = []

  dealerCards: Card[] = []
  playerCards: Card[] = []

  playerCardsSplit1: Card[] = []
  playerCardsSplit2: Card[] = []

  deckCount: number = -1
  showCardCount: boolean = false;

  gameStarted: boolean = false;
  isSplit: boolean = false;
  staySplit1: boolean = false;
  staySplit2: boolean = false;

  perfectStrategyMessage: string = ''

  constructor(
    private fb: FormBuilder,
    private gameUtilityService: GameUtilityService
  ) {
    this.gameModeForm = this.fb.group({
      mode: ''
    });
  }


  ngOnInit(): void {

  }

  determineWinner() {
    
  }

  showCount() {
    this.showCardCount = !this.showCardCount
  }

  calculateCount() {
    let count = 0
    this.cardsPlayed.forEach(card => {
      if (card.name === 'ace' || card.value === 10) {
        count -= 1
      } else if (card.value >= 2 && card.value <= 6) {
        count += 1
      }
    })

    return count
  }

  setGame() {
    if (this.gameModeForm.get('mode')?.value === 'All cards') {
      this.cards = cards
      this.startGame()
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const tmpIdx = this.getRandomInt(i + 1);
      const tmpVal = this.cards[tmpIdx];
      this.cards[tmpIdx] = this.cards[i];
      this.cards[i] = tmpVal;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  addDealerCard() {
    this.deckCount += 1
    this.cardsPlayed.push(this.cards[this.deckCount])
    this.dealerCards.push(this.cards[this.deckCount])
  }

  addPlayerCard(cardsToDeal: number) {

    if (cardsToDeal === 1) {
      this.deckCount += 1
      this.cardsPlayed.push(this.cards[this.deckCount])
      this.playerCards.push(this.cards[this.deckCount])
    } else {
      this.deckCount += 1
      this.cardsPlayed.push(this.cards[this.deckCount])
      this.playerCards.push(this.cards[this.deckCount])
      this.deckCount += 1
      this.cardsPlayed.push(this.cards[this.deckCount])
      this.playerCards.push(this.cards[this.deckCount])
    }
  }

  startGame() {
    this.shuffle()
    this.addPlayerCard(2)
    this.addDealerCard()
    this.gameStarted = true;
  }

  split() {
    this.playerCardsSplit1.push(this.playerCards[0])
    this.playerCardsSplit2.push(this.playerCards[1])
    this.playerCards = []
    this.isSplit = true;
  }

  addSplit1() {
    this.deckCount += 1
    this.cardsPlayed.push(this.cards[this.deckCount])
    this.playerCardsSplit1.push(this.cards[this.deckCount])
  }

  addSplit2() {
    this.deckCount += 1
    this.cardsPlayed.push(this.cards[this.deckCount])
    this.playerCardsSplit2.push(this.cards[this.deckCount])
  }

  staySplit(cardHandStay: string) {
    if (cardHandStay === 'one') {
      this.staySplit1 = true
    } else {
      this.staySplit2 = true
    }
  }

  perfectStrategy() {
    this.perfectStrategyMessage = this.gameUtilityService.perfectStratFirstHand(this.playerCards)
  }


}
