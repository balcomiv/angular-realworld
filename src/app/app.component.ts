import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-realworld';

  constructor(private userService: UserService) {}

  ngOnInit() {
    //  When the app boots up we need to prepopulate the current user.
    //  By hooking into the main AppComponent's ngOnInit method, we can
    //  ensure that the User service will start resolving data before anything
    //  else happens in our application.
    this.userService.populate();
  }
}
