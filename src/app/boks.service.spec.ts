import { TestBed, inject } from '@angular/core/testing';

import { BoksService } from './boks.service';

describe('BoksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoksService]
    });
  });

  it('should be created', inject([BoksService], (service: BoksService) => {
    expect(service).toBeTruthy();
  }));
});
