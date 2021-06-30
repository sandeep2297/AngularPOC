import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

constructor(private router: Router,
  private authService: AuthService) { 

}
  canLoad(): boolean {
    if(this.authService.getButtonClickStatus()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

  canActivate(): boolean  {
    if(this.authService.getButtonClickStatus()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
