import { Component, OnInit } from '@angular/core';
import { Observable, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Card, Dealer } from 'src/app/interfaces/type';
import { CardDeckUtilityService } from 'src/app/services/card-deck-utility/card-deck-utility.service';
declare var $: any

@Component({
  selector: 'app-normal-mode',
  templateUrl: './normal-mode.component.html',
  styleUrls: ['./normal-mode.component.css']
})
export class NormalModeComponent implements OnInit {

  cardDeck: Card[] = [];

  dealer: Observable<any> = this.cardDeckUtility.dealer$;
  dealerCards$: Observable<any> = this.cardDeckUtility.dealer$.pipe(
    map((dealer: Dealer) => {
      return dealer.cards;
    })
  );

  cardCount$: Observable<number> = this.cardDeckUtility.cardCount$;
  showCardCount: boolean = false;

  players$ = this.cardDeckUtility.players$


  constructor(
    private cardDeckUtility: CardDeckUtilityService
  ) { }

  ngOnInit(): void {
    this.startGame();

    this.cardDeckUtility.cardDeck$.pipe(distinctUntilChanged()).subscribe((cardDeck) => {
      this.cardDeck = cardDeck;
    });
  }

  startGame() {
    this.shuffle();
    this.dealCards();
  }

  toggleModal(state: string) {
    $('#chartModal').modal(`${state}`)
  }

  addPlayerCard(index: number) {
    this.cardDeckUtility.addPlayerCard(index);
  }

  getPerfectStrategy(index: number) {
    this.cardDeckUtility.getPerfectStrategy(index)
  }

  toggleCardCount() {
    this.showCardCount = !this.showCardCount;
  }

  stay(playerIndex: number) {
    this.cardDeckUtility.processPlayersTurn(playerIndex, this.cardDeckUtility.players);
  }

  shuffle() {
    this.cardDeckUtility.shuffle()
  }

  dealCards() {
    this.cardDeckUtility.dealCards()
  }

}
