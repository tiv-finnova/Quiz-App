import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Stellen Sie sicher, dass der Pfad korrekt ist

@Injectable({
  providedIn: 'root'
})
export class RouteSourceGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
