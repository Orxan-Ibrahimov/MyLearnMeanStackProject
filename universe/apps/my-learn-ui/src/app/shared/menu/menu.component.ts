import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'universe-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Input() data: boolean | undefined;
  @Output() dataFromMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit(): void {}


  HideMenu() {
    this.data = !this.data;  
    this.dataFromMenu.emit(this.data);      
  }
}
