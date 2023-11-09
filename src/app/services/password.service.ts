import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  checkPasswordStrength(password: string): PasswordStrength {
    const strength: PasswordStrength = {
      isEasy: false,
      isMedium: false,
      isStrong: false,
      isLowLength: false,
    };

    if (password.length === 0) {
      return strength;
    }

    if (password.includes(' ')) {
      strength.isLowLength = true;
      return strength; // Prevent spaces
    }

    if (password.length < 8) {
      strength.isLowLength = true;
      return strength;
    }

    if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      strength.isStrong = true;
    } else if (
      (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) ||
      (/[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password)) ||
      (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password))
    ) {
      strength.isMedium = true;
    } else if (
      /[a-zA-Z]/.test(password) ||
      /[0-9]/.test(password) ||
      /[!@#$%^&*]/.test(password)
    ) {
      strength.isEasy = true;
    }

    return strength;
  }
}

export interface PasswordStrength {
  isEasy: boolean;
  isMedium: boolean;
  isStrong: boolean;
  isLowLength: boolean;
}
