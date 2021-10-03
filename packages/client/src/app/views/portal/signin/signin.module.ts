import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@/shared.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    MatInputModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SigninModule {}
