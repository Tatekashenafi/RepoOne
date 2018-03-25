import { Injectable } from '@angular/core';

@Injectable()
export class ContactMethodListService {

  constructor() { }

  ListofContactMethod()
  {
    return ["phone","E-mail","Mail","News Later"]
  }

}
