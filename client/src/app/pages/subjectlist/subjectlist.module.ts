import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SUBJECTListComponent } from './subjectlist.component';
import { SUBJECTListRoutingModule } from './subjectlist-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SUBJECTListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SUBJECTListComponent
  ]
})
export class SUBJECTListModule { }
