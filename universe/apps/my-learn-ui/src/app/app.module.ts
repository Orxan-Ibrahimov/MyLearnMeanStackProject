/* eslint-disable @nrwl/nx/enforce-module-boundaries */
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
import { ContactComponent } from 'libs/mlui/src/lib/components/contact/contact.component';
import { ContactAddressComponent } from 'libs/mlui/src/lib/components/contact/address/contact-address.component';
import { PlaylistVideoItemComponent } from 'libs/mlui/src/lib/components/courses/playlists/videos/video-item/playlist-video-item.component';
import { VideoDetailComponent } from 'libs/mlui/src/lib/components/courses/playlists/videos/video-detail/video-detail.component';
import { AboutComponent } from 'libs/mlui/src/lib/components/about/about.component';
import { TeachersComponent } from 'libs/mlui/src/lib/components/teachers/teachers.component';
import { StudentReviewsComponent } from 'libs/mlui/src/lib/components/about/reviews/student-reviews.component';

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
      { path: 'video-detail', component: VideoDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'teachers', component: TeachersComponent },
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
    ContactAddressComponent,
    CourseOptionsComponent,
    CourseItemComponent,
    AboutComponent,
    TeachersComponent,
    PlaylistVideosComponent,
    PlaylistDetailComponent,
    VideoDetailComponent,
    ContactComponent,
    PlaylistVideoItemComponent,
    MenuComponent,
    StudentReviewsComponent,
    NotFoundCavemanComponent,
    PlaylistComponent,
  ],
  imports: [BrowserModule, HomeRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
