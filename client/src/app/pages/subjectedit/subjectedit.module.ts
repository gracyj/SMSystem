import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SUBJECTEditComponent } from './subjectedit.component';
import { SUBJECTEditRoutingModule } from './subjectedit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SUBJECTEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SUBJECTEditComponent
  ]
})
export class SUBJECTEditModule { }
