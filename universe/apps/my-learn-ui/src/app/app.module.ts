import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeonLoginComponent } from '../../../../libs/mlui/src/lib/components/registration/neon-login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { NotFoundCavemanComponent } from 'libs/mlui/src/lib/components/not-found-caveman/not-found-caveman.component';
import { CoursesComponent } from 'libs/mlui/src/lib/components/courses/courses.component';
import { CourseOptionsComponent } from 'libs/mlui/src/lib/components/courses/course-options/course-options.component';
import { CourseItemComponent } from 'libs/mlui/src/lib/components/courses/course-item/course-item.component';
import { PlaylistDetailComponent } from 'libs/mlui/src/lib/components/courses/playlists/detail/playlist-detail.component';
import { PlaylistVideosComponent } from 'libs/mlui/src/lib/components/courses/playlists/videos/playlist-videos.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistVideoItemComponent } from 'libs/mlui/src/lib/components/courses/playlists/videos/video-item/playlist-video-item.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: NeonLoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'playlist', component: PlaylistComponent },
    ],
  },
  { path: 'not-found', component: NotFoundCavemanComponent },
  { path: '**', redirectTo: 'not-found' },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NeonLoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    CourseOptionsComponent,
    CourseItemComponent,
    PlaylistVideosComponent,
    PlaylistDetailComponent,
    PlaylistVideoItemComponent,
    MenuComponent,
    NotFoundCavemanComponent,
    PlaylistComponent,
  ],
  imports: [BrowserModule, HomeRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
