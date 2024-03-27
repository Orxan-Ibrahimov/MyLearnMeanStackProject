import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'universe-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() {}
  hiddenMenu = false;

  ngOnInit(): void {}

   GetDataFromMenu(data: boolean) {
    this.hiddenMenu = data;
  }

  GetDataFromHeader(dataFromHeader: { isHidden: boolean }) {
    this.hiddenMenu = dataFromHeader.isHidden;
  }
}
