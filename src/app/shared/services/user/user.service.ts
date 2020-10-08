import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AuthType } from '../../enums/auth-type.enum';
import { UserResponseDto } from '../../interfaces/api.interfaces';
import { User } from '../../models/api/user.model';
import { ApiService } from '../api/api.service';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new ReplaySubject<User | null>(1);
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  setAuth(user: User): void {
    //  Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);

    //  Set current user data into observable
    this.currentUserSubject.next(user);

    //  Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(authType: AuthType, credentials): Observable<User> {
    const route = authType === AuthType.Login ? '/login' : '';

    return this.apiService.post(`/users/${route}`, { user: credentials }).pipe(
      map((userResponse: UserResponseDto) => {
        this.setAuth(userResponse.user);
        return userResponse.user;
      })
    );
  }

  // getCurrentUser() {
  //   return this.currentUserSubject.value;
  // }

  /**
   * Verify JWT in localstorage with server and load user's info.
   * This should only run once on application startup.
   */
  populate(): void {
    //  If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user').subscribe(
        (userResponse: UserResponseDto) => {
          this.setAuth(userResponse.user);
        },
        (error) => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  purgeAuth(): void {
    //  Remove JWT from localstorage
    this.jwtService.destroyToken();
    //  Set current user to an empty object
    this.currentUserSubject.next();
    //  Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }
}
