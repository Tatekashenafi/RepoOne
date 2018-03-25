import { TestBed, inject } from '@angular/core/testing';

import { GenersService } from './geners.service';

describe('GenersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenersService]
    });
  });

  it('should be created', inject([GenersService], (service: GenersService) => {
    expect(service).toBeTruthy();
  }));
});
