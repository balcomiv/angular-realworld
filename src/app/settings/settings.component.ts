import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    });

    //  Optional: subscribe to changes on the form
    //  this.settingsFrom.valueChanges.subscribe(values => this.updateUser(values));
  }

  ngOnInit(): void {}

  logout(): void {
    throw new Error('not implemented');
  }

  submitForm(): void {
    throw new Error('not implemented');
  }
}
