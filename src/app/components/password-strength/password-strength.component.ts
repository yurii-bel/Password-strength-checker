import { Component } from '@angular/core';
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
  password: string = '';
  strength: PasswordStrength = {
    isEasy: false,
    isMedium: false,
    isStrong: false,
    isLowLength: false,
  };
  showPassword: boolean = false;

  constructor(private passwordService: PasswordService) {}

  onPasswordChange(password: string) {
    this.strength = this.passwordService.checkPasswordStrength(password);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
