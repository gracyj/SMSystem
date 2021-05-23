import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDENTSListComponent } from './studentslist.component';
import { STUDENTSListRoutingModule } from './studentslist-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    STUDENTSListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    STUDENTSListComponent
  ]
})
export class STUDENTSListModule { }
