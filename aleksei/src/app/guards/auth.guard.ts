import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  canLoad(): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  private isUserLoggedIn(): boolean {
    return localStorage.getItem('isAuth') === 'true';
  }
}
