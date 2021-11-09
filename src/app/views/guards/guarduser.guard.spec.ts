import { TestBed } from '@angular/core/testing';

import { GuarduserGuard } from './guarduser.guard';

describe('GuarduserGuard', () => {
  let guard: GuarduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuarduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
