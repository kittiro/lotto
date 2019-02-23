import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {
  title = "Loto";
  disable = true;
  isRed=true;
  constructor() { }


  message = 'my message';
  money = 1000000.120;
  toDay = new Date();
  names = ['Kae','Som-1','nop'];
  
  ngOnInit() {
  }

  getName() : string {
    return "Angular";

  }
  showRed(): boolean {
    return true;
  }
}
