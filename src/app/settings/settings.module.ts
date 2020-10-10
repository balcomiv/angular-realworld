import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SettingsComponent } from './settings.component';

const settingsRouting = RouterModule.forChild([
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
]);

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule],
})
export class SettingsModule {}
