import { Component, OnInit } from '@angular/core';
import { ContactMethodListService } from '../contact-method-list.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

MyList

  constructor(Conser: ContactMethodListService) { 
    this.MyList=Conser.ListofContactMethod();
  }

  ngOnInit() {
  }
  MethodSubmite()
  {
    console.log ("submit has bin clicked ");
  }

}
