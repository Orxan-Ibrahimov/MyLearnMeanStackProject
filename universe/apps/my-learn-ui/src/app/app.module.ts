import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeonLoginComponent } from '../../../../libs/mlui/src/lib/components/registration/neon-login.component';
import { InceptionComponent } from './inception/inception.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { NotFoundCavemanComponent } from 'libs/mlui/src/lib/components/not-found-caveman/not-found-caveman.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: NeonLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundCavemanComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    InceptionComponent,
    NeonLoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundCavemanComponent
  ],
  imports: [BrowserModule, HomeRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
