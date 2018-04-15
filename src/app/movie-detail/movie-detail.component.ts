import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService, Movie, Comment } from '../shared/movie.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";

  isCommentHidden: boolean = false;
  constructor(
    private routeInfo: ActivatedRoute,
    private moviesService: MovieService
  ) { }

  ngOnInit() {
    let movieId: number = this.routeInfo.snapshot.params['movieId'];
    this.moviesService.getMovie(movieId).subscribe(
      movie => {
        this.movie = movie;
        // this.movie.rating = parseInt(movie.rating.stars)/10;
        // this.currentBid = movie.price;
      }
    );
    this.comments = this.moviesService.getCommentsForMovieId(movieId);
  }

  addComment(){
    let comment = new Comment(0, this.movie.id, new Date().toISOString(), 'wiredgirl', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // 在点提交评论时，计算平均星级
    // let sum = this.comments.reduce((sum,comment) => sum + comment.rating, 0);
    // this.movie.rating = sum / this.comments.length ;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
