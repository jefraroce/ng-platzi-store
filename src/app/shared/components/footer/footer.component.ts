import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl(null, [
      Validators.email,
      Validators.required
    ]);

    // Así se escuchan los cambios en el input
    // this.emailField.valueChanges.subscribe((value) => {
    //   console.log('value ', value);
    // });
  }

  ngOnInit(): void {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
