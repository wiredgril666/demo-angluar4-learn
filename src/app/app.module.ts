import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieComponent } from './movie/movie.component';
import { StarsComponent } from './stars/stars.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';

import { MovieService } from './shared/movie.service';
import { FilterPipe } from './pipe/filter.pipe';
import { SubstringPipe } from './pipe/substring.pipe';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
  //   redirectTo: '/home',
  //   pathMatch: full
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    MovieComponent,
    StarsComponent,
    MovieDetailComponent,
    HomeComponent,
    FilterPipe,
    SubstringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
