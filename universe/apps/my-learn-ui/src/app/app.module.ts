import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeonLoginComponent } from '../../../../libs/mlui/src/lib/components/registration/neon-login.component';
import { InceptionComponent } from './inception/inception.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: NeonLoginComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    InceptionComponent,
    NeonLoginComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
