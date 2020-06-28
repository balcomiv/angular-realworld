import { Component, Input, OnInit } from '@angular/core';
import { Errors } from '../models';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss'],
})
export class ListErrorsComponent implements OnInit {
  @Input() set errors(errorList: Errors) {
    this.originalErrors = errorList;

    this.formattedErrors = [];

    if (errorList.errors) {
      for (const field in errorList.errors) {
        if (errorList.errors.hasOwnProperty(field)) {
          this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
        }
      }
    }
  }

  get errorList() {
    return this.formattedErrors;
  }

  originalErrors = {};

  private formattedErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
