import { Injectable } from '@angular/core';
import { CanActivate,  Router  } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    
    const isLoggedIn = this.authService.isLogged();

    if (isLoggedIn) {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
  
}
