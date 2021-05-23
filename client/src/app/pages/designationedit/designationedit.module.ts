import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DESIGNATIONEditComponent } from './designationedit.component';
import { DESIGNATIONEditRoutingModule } from './designationedit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DESIGNATIONEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DESIGNATIONEditComponent
  ]
})
export class DESIGNATIONEditModule { }
