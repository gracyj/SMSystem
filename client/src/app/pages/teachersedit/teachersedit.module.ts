import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEACHERSEditComponent } from './teachersedit.component';
import { TEACHERSEditRoutingModule } from './teachersedit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TEACHERSEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TEACHERSEditComponent
  ]
})
export class TEACHERSEditModule { }
