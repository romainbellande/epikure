/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/services';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '@/reducers';
import { setAccessToken } from '@/reducers/user/user.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  form: FormGroup;

  constructor(public authService: AuthService, private store: Store<State>) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
      this.authService.signIn(this.form.value).subscribe((accessToken) => {
        this.store.dispatch(setAccessToken(accessToken));
      });
    }
  }

  isInvalid(control: AbstractControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }
}
