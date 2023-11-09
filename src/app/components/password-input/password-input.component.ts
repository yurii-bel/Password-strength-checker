import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit {
  @Input() showPassword: boolean = false;
  @Output() toggleVisibility = new EventEmitter<void>();
  @Output() passwordChange = new EventEmitter<string>(); // Add this line

  private _password: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    this.onChange(this._password);
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    if (value !== this._password) {
      this._password = value;
      this.onChange(value);
      this.passwordChange.emit(value); // Emit the string value
    }
  }

  writeValue(value: string): void {
    this.password = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any) {
    this.password = event.target.value;
    this.onTouched();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.toggleVisibility.emit();
  }
}
