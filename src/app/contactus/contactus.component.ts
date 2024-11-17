import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  phoneNumber: string = '';
  errorMessage: string = '';

  validatePhoneNumber() {
    const numericValue = this.phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    if (numericValue.length === 10) {
      this.errorMessage = ''; // Reset error message if valid
    } else {
      this.errorMessage = 'Phone number must be 10 digits long';
    }
  }
}
