import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';

const settingsRouting = RouterModule.forChild([
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
]);

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule, settingsRouting],
})
export class SettingsModule {}
