import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { MovieService, Movie } from '../shared/movie.service';
// import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 private movies: Observable<Movie[]>;
 // private products: Product[];
  private imgUrl: string;
  private keyWord: string;

  titleFilter: FormControl = new FormControl();

  constructor(private moviesService: MovieService) {
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
      value => this.keyWord = value
    )
  }

  ngOnInit() {
    // this.imgUrl = "http://placehold.it/320x150";
    this.movies = this.moviesService.getMovies();
    //订阅来自服务的事件，拿到服务传过来的参数，然后在订阅服务的搜索事件，再给product重新赋值
    this.moviesService.searchEvent.subscribe(
      params => this.movies = this.moviesService.search(params)
    );
  }

}


