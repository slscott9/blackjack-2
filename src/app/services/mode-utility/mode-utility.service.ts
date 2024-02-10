import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeUtilityService {

  _practiceMode: BehaviorSubject<string> = new BehaviorSubject('');
  practiceMode$: Observable<string> = this._practiceMode.asObservable();

  _players: BehaviorSubject<number> = new BehaviorSubject(0);
  players$: Observable<number> = this._players.asObservable();


  constructor() { }


  setPracticeMode(value: string) {
    this._practiceMode.next(value);
  }


  setPlayers(value: number) {
    this._players.next(value);
  }
}
