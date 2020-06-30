import { TestBed } from '@angular/core/testing';

import { MessagesServiceService } from './messages-service.service';

describe('MessagesServiceService', () => {
  let service: MessagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
