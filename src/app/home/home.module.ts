import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

const homeRouting = RouterModule.forChild([
  { path: '', component: HomeComponent },
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [homeRouting, SharedModule],
})
export class HomeModule {}
