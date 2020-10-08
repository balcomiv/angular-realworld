import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth.component';
import { NoAuthGuard } from './guards/no-auth.guard';

const authRouting = RouterModule.forChild([
  { path: 'login', component: AuthComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: AuthComponent, canActivate: [NoAuthGuard] },
]);

@NgModule({
  declarations: [AuthComponent],
  imports: [authRouting, SharedModule],
  providers: [NoAuthGuard],
})
export class AuthModule {}
