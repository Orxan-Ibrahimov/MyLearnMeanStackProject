import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NotFoundCavemanComponent } from '../../../../../libs/mlui/src/lib/components/not-found-caveman/not-found-caveman.component';
import { HomeComponent } from './home.component';

// const routes: Route[] = [
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
// ];

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    // RouterModule.forChild(routes)
  ],
})
export class HomeRoutingModule {}
