
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

  //   console.log('deck.length');

  //   console.log(this.deck.length);

  //   let aceCount = 0
  //   let tenCount = 0
  //   let nineCount = 0
  //   let eightCount = 0
  //   let sevenCount = 0
  //   let sixCount = 0
  //   let fiveCount = 0
  //   let fourCount = 0
  //   let threeCount = 0
  //   let twoCount = 0

  //  if(this.deck.length > 0) {
  //   for (let i = 0; i < this.deck.length; i++) {
  //     if(this.deck[this.deckCount].name === 'ace') {
  //       aceCount += 1        
  //     }else if (this.deck[this.deckCount].name === 'two') {

  //       twoCount += 1        

  //     }else if ((this.deck[this.deckCount].name === 'three')) {
  //       threeCount += 1        

  //     }else if ((this.deck[this.deckCount].name === 'four')) {
  //       fourCount += 1        

  //     }else if ((this.deck[this.deckCount].name === 'five')) {
  //       fiveCount += 1
  //     }else if ((this.deck[this.deckCount].name === 'six')) {
  //       sixCount += 1
  //     }else if ((this.deck[this.deckCount].name === 'seven')) {
  //       sevenCount += 1
  //     }else if ((this.deck[this.deckCount].name === 'eight')) {
  //       eightCount += 1
  //     }else if ((this.deck[this.deckCount].name === 'nine')) {
  //       nineCount += 1
  //     }else if ((this.deck[this.deckCount].name === 'ten')) {
  //       tenCount += 1        
  //     }
  //     this.deckCount += 1
  //   }

  //   console.log('aces');
  //   console.log(aceCount);
  //   console.log('--------------------------------------');
  //   console.log('ten');
  //   console.log(tenCount);
  //   console.log('--------------------------------------');
  //   console.log('nine');
  //   console.log(nineCount);
  //   console.log('--------------------------------------');
  //   console.log('eight');
  //   console.log(eightCount);
  //   console.log('--------------------------------------');
  //   console.log('seven');
  //   console.log(sevenCount);
  //   console.log('--------------------------------------');
  //   console.log('six');
  //   console.log(sixCount);
  //   console.log('--------------------------------------');
  //   console.log('five');
  //   console.log(fiveCount);
  //   console.log('--------------------------------------');
  //   console.log('four');
  //   console.log(fourCount);
  //   console.log('--------------------------------------');
  //   console.log('three');
  //   console.log(threeCount);
  //   console.log('--------------------------------------');
  //   console.log('two');
  //   console.log(twoCount);
  //   console.log('--------------------------------------');

    
  //  }
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
  }

  getCardCount() {
    return this.cardCount
  }

  toggleCardCount() {
    this.showCardCount = !this.showCardCount
  }

}
