import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TEACHERSEditComponent } from './teachersedit.component';

const routes: Routes = [
  {
    path: '',
    component: TEACHERSEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TEACHERSEditRoutingModule { }
