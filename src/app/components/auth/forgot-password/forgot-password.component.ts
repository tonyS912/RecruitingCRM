import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

  });

  hide = true;

  loginAsUser() {
  }

  loginAsGuest() {
  }
}
