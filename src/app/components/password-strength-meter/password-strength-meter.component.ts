// password-strength-meter.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  @Input() isEasy: boolean = false;
  @Input() isMedium: boolean = false;
  @Input() isStrong: boolean = false;
  @Input() isLowLength: boolean = false;
}
