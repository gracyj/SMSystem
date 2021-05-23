import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDENTSEditComponent } from './studentsedit.component';
import { STUDENTSEditRoutingModule } from './studentsedit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    STUDENTSEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    STUDENTSEditComponent
  ]
})
export class STUDENTSEditModule { }
