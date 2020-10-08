import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { UserService } from 'src/app/shared';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    //  i.e. if isAuthenticated is false, set canActivate to true
    return this.userService.isAuthenticated.pipe(
      map((bool) => !bool),
      tap(() => console.log('Yeah!')),
      take(1)
    );
  }
}
