import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  declarations: [ListErrorsComponent, ShowAuthedDirective],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    ShowAuthedDirective,
  ],
})
export class SharedModule {}
