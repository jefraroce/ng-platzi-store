import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.signInForm = this.formBuilder.group({
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
          Validators.required
        ]
      ]
    });
  }

  ngOnInit(): void { }

  onSubmit(signInData) {
    // this.signInForm.reset();

    console.log(signInData);
    if (this.signInForm.valid) {
      this.authService.signIn(signInData.email, signInData.password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch((error) => {
          console.error('Error authenticating user: ', error);
          this.snackBar.open('No hemos podido acceder a tu cuenta.', 'cerrar');
        });
    }
  }
}
