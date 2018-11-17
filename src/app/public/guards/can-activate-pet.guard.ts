import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PetsService } from 'src/app/shared/services/pets.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivatePetGuard implements CanActivate {
  constructor(
    private petService: PetsService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const thePet = this.petService.getById(+next.params.id);
    this.router.navigate(['/page-not-found']);
    return !!thePet;
  }
}
