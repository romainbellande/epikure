/* eslint-disable @typescript-eslint/unbound-method */
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup;

  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
        ),
      ]),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.info(this.form.value);
      this.authService
        .signUp(this.form.value)
        .subscribe((response) => console.log(response));
    }
  }

  isInvalid(control: AbstractControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get pseudo(): AbstractControl | null {
    return this.form.get('pseudo');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }
}
