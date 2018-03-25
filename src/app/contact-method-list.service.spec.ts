import { TestBed, inject } from '@angular/core/testing';

import { ContactMethodListService } from './contact-method-list.service';

describe('ContactMethodListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactMethodListService]
    });
  });

  it('should be created', inject([ContactMethodListService], (service: ContactMethodListService) => {
    expect(service).toBeTruthy();
  }));
});
