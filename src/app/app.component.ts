import { Component, OnInit } from '@angular/core';
import { JwtService } from './shared/services/jwt/jwt.service';
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
    this.userService.populate();
  }
}
