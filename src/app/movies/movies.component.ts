import { Component, OnInit } from '@angular/core';
import { GenersService } from '../geners.service';

@Component({
  selector: 'app-movies',
  templateUrl:'./movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Moveicategory
  ViewMode:String="S"
  constructor(service:GenersService) { 
    this.Moveicategory=service.getGenerList()
  }
  ngOnInit() {
  }

  ChangeViewMode(NViewMode)
  {
    this.ViewMode=NViewMode
  }

}
