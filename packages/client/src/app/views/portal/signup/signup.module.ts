import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class SignupModule {}
