import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    HeaderModule,
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent],
  providers: [],
})
export class SidenavModule {}
