import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { EventEmitter } from '@angular/core';
@Injectable()
export class MovieService {

 //搜索事件
  searchEvent: EventEmitter<MovieSearchParams> = new EventEmitter();//eventEmitter可以接收数据也可以发送数据

  getMovies(): Observable<Movie[]> {
    return this.http.get("/v2/movie/in_theaters" + "?start=0&count=6").map(
      (res )=>{
        return res.json().subjects;
      }
    );
  }

  constructor(private http: Http) { }

  //详情
  getMovie(id:number): Observable<Movie>  {
    //用find返回id对应的product
    return this.http.get("/v2/movie/subject/" +id).map(res => res.json());
  }
  search(params: MovieSearchParams): Observable<Movie[]>{
    return this.http.get("/v2/movie/search",{search: this.encodeParams(params)}).map(res => res.json().subjects);
  }
//因为评论无访问权限，所以暂时写死
//   getCommentsForMovieId(id:number): Observable<Comment[]> {
//     return this.http.get("/v2/movie/subject/"+id+"/comments" ).map((res) => res.json());
//   }
  private comments: Comment[] = [
    new Comment(1, 25727544, "2017-02-02 22:22:22", "张三", 3, "还好"),
    new Comment(2, 4920389, "2017-03-02 23:22:22", "李四", 2, "一般般"),
    new Comment(3, 25727544, "2017-04-02 20:22:22", "王五", 4, "东西不错"),
    new Comment(4, 26384741, "2016-05-02 21:22:22", "赵六", 3, "还可以吧"),
    new Comment(2, 4920389, "2017-03-02 21:22:21", "李赵", 2, "一般等等"),
  ]
  getCommentsForMovieId(id: number): Comment[]{
    return this.comments.filter((comment: Comment) => comment.movieId == id)
  }

  private encodeParams(params: MovieSearchParams) {
    return Object.keys(params)//拿到所有参数的集合
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());;
  }
}

export class Movie {
  constructor(
    public id: number,
    public casts: Casts,
    public year: number,
    public rating: number,
    // public desc: string,
    // public categories: string[]
  ){}
}
// export class  Rating{
//   constructor(
//     public stars: string,
//     public average: Number,
//     public max: Number,
//     public min: Number,
//   ){}
// }
export class  Casts{
  constructor(
    public large: string,
    public small: string,
    public medium: string,
  ){}
}

export class Comment {
  constructor(
    public id: number,
    public movieId: number,
    public timestamp: string,
    public user: string,
    public rating: Number,
    public content: string
  ){}
}

//搜索电影
export class MovieSearchParams {
  constructor(public q:string,
              public tag:string
  ){}
}
