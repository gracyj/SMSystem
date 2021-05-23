import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SUBJECTEditComponent } from './subjectedit.component';

const routes: Routes = [
  {
    path: '',
    component: SUBJECTEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SUBJECTEditRoutingModule { }
