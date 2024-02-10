import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Card, Player, cards } from 'src/app/interfaces/type';
import { CardDeckUtilityService } from 'src/app/services/card-deck-utility/card-deck-utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameModeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardDeckUtility: CardDeckUtilityService,
    private router: Router
  ) {
    this.gameModeForm = this.fb.group({
      players: '',
      mode: ''
    });
  }


  ngOnInit(): void {
  }

  startGame() {
    this.processPlayers();
    this.router.navigate([`${this.gameModeForm.get('mode')?.value.toLowerCase()}`])
  }


  processPlayers() {
    let players: Player[] = []
    for(let i = 0; i < +this.gameModeForm.get('players')?.value; i++) {
      players.push({
        cards: [],
        showPerfectStrat: false,
        perfectStrat : '',
        bust: false,
        blackJack: false,
        turn: false
      })
    };

    this.cardDeckUtility.players = players;
  }
 

}
