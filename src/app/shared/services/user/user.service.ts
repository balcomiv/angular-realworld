import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../../models/api/user.model';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { AuthType } from '../../enums/auth-type.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(private apiService: ApiService) {}

  setAuth(user: User): void {
    //  Set current user data into observable
    this.currentUserSubject.next(user);

    //  Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(authType: AuthType, credentials): Observable<User> {
    const route = authType === AuthType.Login ? '/login' : '';

    return this.apiService.post(`/users/${route}`, { user: credentials }).pipe(
      map((data) => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
