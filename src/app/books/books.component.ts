import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }
booktitle=['VB','java','C#','C++']
ISBN:string='199'
  ngOnInit() {
  }
 
    onEnterkeyup1($event)
    {
      this.ISBN=$event.target.value;
    }

    onEnterkeyup2(bookid)
    {
      this.ISBN=bookid;
    }
    bookISB
    onEnterkeyup3()
    {
      this.ISBN=this.bookISB;
    }

    onsave(){
      console.log("the buton is clicked" );
     this.ISBN=this.bookISB;
     }

}
