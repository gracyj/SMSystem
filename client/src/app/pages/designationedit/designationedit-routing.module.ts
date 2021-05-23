import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DESIGNATIONEditComponent } from './designationedit.component';

const routes: Routes = [
  {
    path: '',
    component: DESIGNATIONEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DESIGNATIONEditRoutingModule { }
