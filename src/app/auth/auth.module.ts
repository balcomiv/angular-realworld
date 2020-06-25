import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const authRouting = RouterModule.forChild([
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
]);

@NgModule({
  declarations: [AuthComponent],
  imports: [authRouting, SharedModule],
})
export class AuthModule {}
