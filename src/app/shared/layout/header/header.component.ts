import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User;

  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          this.currentUser = { ...user };
        } else {
          this.currentUser = new User();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
