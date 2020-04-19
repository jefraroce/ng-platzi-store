import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(this.name, [
        Validators.required,
        Validators.minLength(1)
      ]),
      email: '',
      message: ''
    });
  }

  ngOnInit(): void { }

  get name() {
    if (this.contactForm) {
      return this.contactForm.get('name');
    }

    return '';
  }

  onSubmit(contactData) {
    this.contactForm.reset();

    // console.log(name)

    console.warn('Your order has been submitted', contactData);
  }

}
