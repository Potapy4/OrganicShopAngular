import { TestBed, inject } from '@angular/core/testing';

import { AdminGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard]
    });
  });

  it('should be created', inject([AdminGuard], (service: AdminGuard) => {
    expect(service).toBeTruthy();
  }));
});
