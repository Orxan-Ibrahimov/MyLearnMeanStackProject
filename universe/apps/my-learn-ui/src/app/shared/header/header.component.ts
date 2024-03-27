import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'universe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  @Input()
  data!: boolean;

  @Input()
  colorData!: boolean;

  @Output() dataFromHeader: EventEmitter<{    
    isHidden: boolean;
  }> = new EventEmitter<{ isHidden: boolean }>();
  isHidden = true;


  constructor() {}
  ngOnInit(): void {}

  HideMenu() {
    this.data = !this.data;
    this.SendData();
  }


  MakeDark() {
    this.colorData = !this.colorData;
    document.documentElement.setAttribute("data-theme",this.colorData?"dark":"light");
    this.SendData();
  }

  SendData() {
    this.dataFromHeader.emit({isHidden: this.data });
  }
}
