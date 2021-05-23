import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { STUDENTSListComponent } from './studentslist.component';

const routes: Routes = [
  {
    path: '',
    component: STUDENTSListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class STUDENTSListRoutingModule { }
