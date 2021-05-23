import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SUBJECTListComponent } from './subjectlist.component';

const routes: Routes = [
  {
    path: '',
    component: SUBJECTListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SUBJECTListRoutingModule { }
