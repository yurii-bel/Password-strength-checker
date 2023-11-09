import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthMeterComponent } from './components/password-strength-meter/password-strength-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PasswordStrengthComponent,
    PasswordInputComponent,
    PasswordStrengthMeterComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
