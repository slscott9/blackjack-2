
import { Component, OnInit } from '@angular/core';
import { Card, cards } from 'src/app/interfaces/type';
import { GameUtilityService } from 'src/app/services/game-utility/game-utility.service';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  dealerCards: Card[] = []
  playerCards: Card[] = []
  deck: Card[] = []
  deckCount: number = 0
  cardCount: number = 0
  showCardCount: boolean = false;

  constructor(
    private gameUtilityService: GameUtilityService
  ) {
  }

  ngOnInit(): void {
    this.deck = cards    
    this.shuffle()
    this.playerCards.push(this.deck[this.deckCount += 1])
    this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckCount])
  }

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


  addPlayerCard() {
    this.playerCards = []
    this.playerCards.push(this.deck[this.deckCount += 1])
    this.cardCount += this.gameUtilityService.determineCount(this.deck[this.deckCount])    

    if(this.deckCount === this.deck.length - 1) {
      this.shuffle()
      this.deckCount = 0
    }
  }

  getCardCount() {
    return this.cardCount
  }

  toggleCardCount() {
    this.showCardCount = !this.showCardCount
  }

}
