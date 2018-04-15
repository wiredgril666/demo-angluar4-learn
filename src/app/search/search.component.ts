import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories: string[];

  constructor(private moviesService: MovieService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      q: [''],
      tag: ['']
    })
  }

  ngOnInit() {}

  onSearch(){
    if(this.formModel.value.q||this.formModel.value.tag){
      console.log(this.formModel.value);
      this.moviesService.searchEvent.emit(this.formModel.value);
    }
  }
}
