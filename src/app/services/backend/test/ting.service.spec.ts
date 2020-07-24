import { TestBed } from '@angular/core/testing';

import { TingService } from './ting.service';

describe('TingService', () => {
  let service: TingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
