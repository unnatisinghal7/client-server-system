import { TestBed } from '@angular/core/testing';

import { UserScreenService } from './user-screen.service';

describe('UserScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserScreenService = TestBed.get(UserScreenService);
    expect(service).toBeTruthy();
  });
});
