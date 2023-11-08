import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;
  isLowLength: boolean = false;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onPasswordChange() {
    const password = this.password;

    this.isEasy = false;
    this.isMedium = false;
    this.isStrong = false;
    this.isLowLength = false;

    if (password.length === 0) {
      return;
    } else if (password.includes(' ')) {
      this.isLowLength = true;
      return; // Prevent spaces
    } else if (password.length < 8) {
      this.isLowLength = true;
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      this.isStrong = true;
    } else if (
      (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
      (/[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password)) ||
      (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password))
    ) {
      this.isMedium = true;
    } else if (
      /[a-zA-Z]/.test(password) ||
      /[0-9]/.test(password) ||
      /[!@#$%^&*]/.test(password)
    ) {
      this.isEasy = true;
    }
  }
}
