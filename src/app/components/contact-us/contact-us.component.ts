import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  phoneNumberForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.phoneNumberForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }
}
