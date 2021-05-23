import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DESIGNATIONListComponent } from './designationlist.component';

const routes: Routes = [
  {
    path: '',
    component: DESIGNATIONListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DESIGNATIONListRoutingModule { }
