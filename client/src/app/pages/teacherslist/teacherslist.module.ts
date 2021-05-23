import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEACHERSListComponent } from './teacherslist.component';
import { TEACHERSListRoutingModule } from './teacherslist-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TEACHERSListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TEACHERSListComponent
  ]
})
export class TEACHERSListModule { }
