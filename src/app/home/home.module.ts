import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: HomeComponent },
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [homeRouting, SharedModule],
})
export class HomeModule {}
