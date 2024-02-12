import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card, Dealer, Player, TOTALS, cards, cardsNoAces } from 'src/app/interfaces/type';
import { PerfectStratUtilityService } from '../perfect-strat-utility/perfect-strat-utility.service';

@Injectable({
  providedIn: 'root'
})
export class CardDeckUtilityService {

  _cardDeck: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]); 
  cardDeck$ : Observable<Card[]> = this._cardDeck;

  _cardCount: BehaviorSubject<number> = new BehaviorSubject<number>(0); 
  cardCount$ : Observable<number> = this._cardCount;

  _players: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]); 
  players$ : Observable<Player[]> = this._players;

  _dealer: BehaviorSubject<Dealer> = new BehaviorSubject<Dealer>({cards: []}); 
  dealer$ : Observable<Dealer> = this._dealer;

  constructor(
    private perfectStratUtility: PerfectStratUtilityService
  ) { 

  }

  set cardCount(count: number) {
    this._cardCount.next(count);
  }

  get cardCount() {
    return this._cardCount.getValue()
  }

  get cardDeck() {
    return this._cardDeck.getValue()
  }

  set cardDeck(deck: any) {
    this._cardDeck = deck;
  }

  get players() {
    return this._players.getValue();
  }

  set players(players: Player[]) {
    this._players.next(players);

    let playersCards = []

    for(let i = 0; i < this.players.length; i++) {
      playersCards.push([...[]])
    }

    this._players.next(players)
  }

  get dealer() {
    return this._dealer.getValue();
  }

  set dealer(dealer: Dealer) {
    this._dealer.next(dealer);
  }

  shuffle() { 
    this.cardCount = 0;
    let shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]; 
    } 

    this._cardDeck.next(shuffledCards);
  }; 

  dealCards() {
    this.resetPlayers();
    let playersPlusDealer = this.players.length + 1;
    let players = this.players
    let cardDeck: any[] = this.cardDeck;
    let dealer = this.dealer;

    for(let i = playersPlusDealer - 1; i >= 0; i--) {
      let nextCard = cardDeck.shift();
      let nextNextCard = cardDeck.shift()
      this.cardCount = this.cardCount += nextCard.value;
    
      if(i === 0) {
        dealer.cards.push(nextCard);
      } else {
        players[i - 1].cards.push(nextCard);
        players[i - 1].cards.push(nextNextCard);
        this.setPerfectStrategy(i - 1)
      }
    }

    players[players.length - 1].turn = true;
    this.players = players;
    this.dealer = dealer;
  }

  resetPlayers() {
    let players: Player[] = this.players;
    players.forEach((player: Player) => {
      player.bust = false;
      player.showPerfectStrat = false;
      player.perfectStrat = ''
      player.cards = [],
      player.turn = false;
    });
    this.players = players;

    let dealer = this.dealer;
    dealer.cards = [];
    this.dealer = dealer;
  }

  addPlayerCard(index: number) {
    let players: Player[] = this.players;
    let nextCard = this.cardDeck.shift();
    this.cardCount = this.cardCount += nextCard.value;
    players[index].cards.push(nextCard);
    this.setPerfectStrategy(index)
    this._players.next(this.checkForBust(players, index));
  }

  checkForBust(players: Player[], index: number) {
    let total = 0;

    players[index].cards.forEach((card: Card) => {
      total += card.value;

      if(total === 21) {
        players = this.processPlayersTurn(index, players);
        players[index].blackJack = true;
      } else if(total > 21) {
        players = this.processPlayersTurn(index, players);
        players[index].turn = false;
        players[index].bust = true;
      }
    });

    return players;
  }

  processPlayersTurn(playerIndex: number, players: Player[]) {
    for(let i = players.length - 1; i >= 0; i--) {
      if(i >= 0) {
        players[i].turn = false;
        if(i === playerIndex - 1) {
          players[i].turn = true
        }
      }
    }
    return players;
  }

  setPerfectStrategy(index: number) {
    let players: Player[] = this.players;
    players[index].perfectStrat = this.perfectStratUtility.determinePerfectStrategy(this.players[index].cards);
    this.players = players;
  }

  togglePerfectStrat(index: number) {
    this.setPerfectStrategy(index)
    let players = this.players;
    players[index].showPerfectStrat = !players[index].showPerfectStrat;
    this.players = players;
  }




  
}
