import { Injectable } from '@angular/core';
import { Card } from 'src/app/interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class PerfectStratUtilityService {

  constructor() { }


  cardTotals(cards: Card[]): number {
    let total = 0
    cards.forEach(card => {
      total += card.value
    })
    return total
  }

  determinePerfectStrategy(playerCards: Card[]): string {
    let playerTotal = this.cardTotals(playerCards)

    //splits
    if(playerCards.length > 1) {
      if (playerCards[0].name === playerCards[1].name) {
        if (playerCards[0].name === 'ace' && playerCards[1].name === 'ace') {
          return 'Always split aces'
        } else if (playerCards[0].name === 'ten') {
          return 'Never split tens'
        } else if (playerCards[0].name === 'nine') {
          return 'A pair of 9’s splits against dealer 2 through 9, except for 7, otherwise stand.'
        } else if (playerCards[0].name === 'eight') {
          return 'Always split 8’s'
        } else if (playerCards[0].name === 'seven') {
          return 'A pair of 7’s splits against dealer 2 through 7, otherwise hit.'
        } else if (playerCards[0].name === 'six') {
          return 'A pair of 6’s splits against dealer 2 through 6, otherwise hit.'
        } else if (playerCards[0].name === 'five') {
          return 'Never splits 5s'
        } else if (playerCards[0].name === 'four') {
          return 'A pair of 4’s splits against dealer 5 and 6, otherwise hit.'
        } else if (playerCards[0].name === 'three') {
          return 'A pair of 3’s splits against dealer 2 through 7, otherwise hit.'
        } else if (playerCards[0].name === 'two') {
          return 'A pair of 2’s splits against dealer 2 through 7, otherwise hit.'
        }
      } else if (playerCards[0].name === 'ace' || playerCards[1].name === 'ace') { //Soft totals
        if (playerCards[0].name === 'ace') {
          if (playerCards[1].name === 'nine') {
            return 'Soft 20 (A,9) always stands.'
          } else if (playerCards[1].name === 'eight') {
            return 'Soft 19 (A,8) doubles against dealer 6, otherwise stand.'
          } else if (playerCards[1].name === 'seven') {
            return 'Soft 18 (A,7) doubles against dealer 2 through 6, and hits against 9 through Ace, otherwise stand.'
          } else if (playerCards[1].name === 'six') {
            return 'Soft 17 (A,6) doubles against dealer 3 through 6, otherwise hit.'
          } else if (playerCards[1].name === 'five') {
            return 'Soft 16 (A,5) doubles against dealer 4 through 6, otherwise hit.'
          } else if (playerCards[1].name === 'four') {
            return 'Soft 15 (A,4) doubles against dealer 4 through 6, otherwise hit.'
          } else if (playerCards[1].name === 'three') {
            return 'Soft 14 (A,3) doubles against dealer 5 through 6, otherwise hit.'
          } else if (playerCards[1].name === 'two') {
            return 'Soft 13 (A,2) doubles against dealer 5 through 6, otherwise hit.'
          }
        } else if (playerCards[1].name === 'ace') {
          if (playerCards[0].name === 'nine') {
            return 'Soft 20 (A,9) always stands.'
          } else if (playerCards[0].name === 'eight') {
            return 'Soft 19 (A,8) doubles against dealer 6, otherwise stand.'
          } else if (playerCards[0].name === 'seven') {
            return 'Soft 18 (A,7) doubles against dealer 2 through 6, and hits against 9 through Ace, otherwise stand.'
          } else if (playerCards[0].name === 'six') {
            return 'Soft 17 (A,6) doubles against dealer 3 through 6, otherwise hit.'
          } else if (playerCards[0].name === 'five') {
            return 'Soft 16 (A,5) doubles against dealer 4 through 6, otherwise hit.'
          } else if (playerCards[0].name === 'four') {
            return 'Soft 15 (A,4) doubles against dealer 4 through 6, otherwise hit.'
          } else if (playerCards[0].name === 'three') {
            return 'Soft 14 (A,3) doubles against dealer 5 through 6, otherwise hit.'
          } else if (playerCards[0].name === 'two') {
            return 'Soft 13 (A,2) doubles against dealer 5 through 6, otherwise hit.'
          }
        }
      } else {
        if (playerTotal >= 17) {
          return '17 and up always stands.'
        } else if (playerTotal === 16) {
          return '16 stands against dealer 2 through 6, otherwise hit.'
        } else if (playerTotal === 15) {
          return '15 stands against dealer 2 through 6, otherwise hit.'
        } else if (playerTotal === 14) {
          return '14 stands against dealer 2 through 6, otherwise hit.'
        } else if (playerTotal === 13) {
          return '13 stands against dealer 2 through 6, otherwise hit.'
        } else if (playerTotal === 12) {
          return '12 stands against dealer 4 through 6, otherwise hit.'
        } else if (playerTotal === 11) {
          return '11 always doubles.'
        } else if (playerTotal === 10) {
          return '10 doubles against dealer 2 through 9 otherwise hit.'
        } else if (playerTotal === 9) {
          return '9 doubles against dealer 3 through 6 otherwise hit.'
        } else if (playerTotal === 8) {
          return '8 always hits.'
        } else {
          return 'hit'
        }
      }
    } else { //Hard totals      
      if (playerTotal >= 17) {
        return '17 and up always stands.'
      } else if (playerTotal === 16) {
        return '16 stands against dealer 2 through 6, otherwise hit.'
      } else if (playerTotal === 15) {
        return '15 stands against dealer 2 through 6, otherwise hit.'
      } else if (playerTotal === 14) {
        return '14 stands against dealer 2 through 6, otherwise hit.'
      } else if (playerTotal === 13) {
        return '13 stands against dealer 2 through 6, otherwise hit.'
      } else if (playerTotal === 12) {
        return '12 stands against dealer 4 through 6, otherwise hit.'
      } else if (playerTotal === 11) {
        return '11 always doubles.'
      } else if (playerTotal === 10) {
        return '10 doubles against dealer 2 through 9 otherwise hit.'
      } else if (playerTotal === 9) {
        return '9 doubles against dealer 3 through 6 otherwise hit.'
      } else if (playerTotal === 8) {
        return '8 always hits.'
      } else {
        return 'hit'
      }
    }

    return ''
  }

  determineCount(card: Card): number {
    let cardValue = 0

    if(card.name === 'ace' || card.value >= 10) {
      
            
      cardValue = -1
    } else if(card.value < 7) {
      cardValue = 1
    }

    
    
    return cardValue
  }
}
