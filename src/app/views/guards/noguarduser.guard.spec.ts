import { TestBed } from '@angular/core/testing';

import { NoguarduserGuard } from './noguarduser.guard';

describe('NoguarduserGuard', () => {
  let guard: NoguarduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoguarduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
