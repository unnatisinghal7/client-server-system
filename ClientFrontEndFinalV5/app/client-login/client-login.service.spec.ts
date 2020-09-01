import { TestBed } from '@angular/core/testing';

import { ClientLoginService } from './client-login.service';

describe('ClientLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientLoginService = TestBed.get(ClientLoginService);
    expect(service).toBeTruthy();
  });
});
