import { TestBed } from '@angular/core/testing';

import { ClientlistService } from './clientlist.service';

describe('ClientlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientlistService = TestBed.get(ClientlistService);
    expect(service).toBeTruthy();
  });
});
