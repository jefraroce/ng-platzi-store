import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    });
  }

  ngOnInit(): void { }

  onSubmit(signUpData) {
    console.log('signUpData ', signUpData);
    if (this.signUpForm.valid) {
      this.authService.signUp(signUpData.email, signUpData.password)
        .then(() => {
          this.router.navigate(['/auth/sign-in']);
        })
        .catch((error) => {
          console.error('Error registering user: ', error);
        });
    } else {
      console.log('this.signUpForm ', this.signUpForm);
    }
  }
}
