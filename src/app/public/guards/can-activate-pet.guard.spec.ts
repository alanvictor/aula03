import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivatePetGuard } from './can-activate-pet.guard';

describe('CanActivatePetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivatePetGuard]
    });
  });

  // it('should ...', inject([CanActivatePetGuard], (guard: CanActivatePetGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
