import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

enum AuthType {
  Login = 'login',
  Register = 'register',
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authTypeLogin = false;
  title = '';
  isSubmitting = false;
  authForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //  Need to subscribe to route here, because Angular is smart enough to not re-init
    //  when multiple routes, utilize the same component (I.E. login / register)
    /*
      Note:
      When subscribing to an observable in a component, you almost always unsubscribe when the component is destroyed.
      However, ActivatedRoute observables are among the exceptions because ActivatedRoute and its observables are insulated
      from the Router itself. The Router destroys a routed component when it is no longer needed along with the injected ActivatedRoute.
    */
    this.route.url.subscribe((data) => {
      //  Get the last piece of the URL (it's either 'login' or 'register')
      if (data[data.length - 1].path === AuthType.Login) {
        this.authTypeLogin = true;
      } else {
        this.authTypeLogin = false;
      }
      //  Set title for the page accordingly
      this.title = this.authTypeLogin ? 'Sign In' : 'Sign Up';
      //  Add form control for username if this is the register page
      if (!this.authTypeLogin) {
        this.authForm.addControl(
          'username',
          new FormControl('', Validators.required)
        );
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    //  Check out what you get!
    console.log(credentials);
  }
}
