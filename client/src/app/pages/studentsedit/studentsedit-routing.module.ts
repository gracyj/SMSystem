import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { STUDENTSEditComponent } from './studentsedit.component';

const routes: Routes = [
  {
    path: '',
    component: STUDENTSEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class STUDENTSEditRoutingModule { }
