// password-input.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  @Input() password: string = '';
  @Input() showPassword: boolean = false;
  @Output() passwordChange = new EventEmitter<string>();
  @Output() toggleVisibility = new EventEmitter<void>();

  onPasswordChange() {
    this.passwordChange.emit(this.password);
  }

  togglePasswordVisibility() {
    this.toggleVisibility.emit();
  }
}
