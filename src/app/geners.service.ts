import { Injectable } from '@angular/core';

@Injectable()
export class GenersService {
  constructor() { }
  getGenerList()
  {
    /*the logic to connect to the web service or database to get list of movie geners or category*/
    return ["Action","Romance","Scinsefiction","Horer"]
  }
}
