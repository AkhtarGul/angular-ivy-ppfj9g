import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswtich',
  templateUrl: './ngswtich.component.html',
  styleUrls: ['./ngswtich.component.css'],
})
export class NgswtichComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  selectProduct: string;
  getProductValue(value) {
    console.log(value.target.value);
    this.selectProduct = value.target.value;
  }
}
