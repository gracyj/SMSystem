import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TEACHERSListComponent } from './teacherslist.component';

const routes: Routes = [
  {
    path: '',
    component: TEACHERSListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TEACHERSListRoutingModule { }
