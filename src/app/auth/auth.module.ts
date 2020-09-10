import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth.component';

const authRouting = RouterModule.forChild([
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
]);

@NgModule({
  declarations: [AuthComponent],
  imports: [authRouting, SharedModule],
})
export class AuthModule {}
