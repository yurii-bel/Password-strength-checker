// password-strength.component.ts
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  PasswordService,
  PasswordStrength,
} from 'src/app/services/password.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  providers: [PasswordService],
})
export class PasswordStrengthComponent {
  private _password: string = '';
  strength: PasswordStrength = {
    isEasy: false,
    isMedium: false,
    isStrong: false,
    isLowLength: false,
  };
  showPassword: boolean = false;

  constructor(private passwordService: PasswordService) {}

  set password(value: string) {
    this._password = value;
    this.strength = this.passwordService.checkPasswordStrength(value);
  }

  get password(): string {
    return this._password;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
