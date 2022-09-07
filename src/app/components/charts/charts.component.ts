import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/type';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  deck: Card[] = []

  constructor() {
    
  }

  ngOnInit(): void {
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

}
