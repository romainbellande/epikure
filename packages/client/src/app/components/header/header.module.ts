import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '@/shared.module';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, MatSelectModule, FormsModule, MatTooltipModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
