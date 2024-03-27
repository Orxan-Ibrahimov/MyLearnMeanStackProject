import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'universe-not-found-caveman',
  templateUrl: './not-found-caveman.component.html'
})
export class NotFoundCavemanComponent {
  constructor(private route:Router) {}
  useLayout = false;

  ngOnInit(): void {
  }
}
