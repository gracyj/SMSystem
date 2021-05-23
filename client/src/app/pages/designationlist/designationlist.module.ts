import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DESIGNATIONListComponent } from './designationlist.component';
import { DESIGNATIONListRoutingModule } from './designationlist-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DESIGNATIONListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DESIGNATIONListComponent
  ]
})
export class DESIGNATIONListModule { }
