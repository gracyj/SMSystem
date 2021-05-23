// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { DESIGNATIONEditComponent} from './pages/designationedit/designationedit.component';
import { DESIGNATIONListComponent} from './pages/designationlist/designationlist.component';
import { STUDENTSEditComponent} from './pages/studentsedit/studentsedit.component';
import { STUDENTSListComponent} from './pages/studentslist/studentslist.component';
import { SUBJECTEditComponent} from './pages/subjectedit/subjectedit.component';
import { SUBJECTListComponent} from './pages/subjectlist/subjectlist.component';
import { TEACHERSEditComponent} from './pages/teachersedit/teachersedit.component';
import { TEACHERSListComponent} from './pages/teacherslist/teacherslist.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'designations/:id',  loadChildren: './pages/designationedit/designationedit.module#DESIGNATIONEditModule' , canActivate: [AuthGuard] },
    { path: 'designations',  loadChildren: './pages/designationlist/designationlist.module#DESIGNATIONListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'studentses/:id',  loadChildren: './pages/studentsedit/studentsedit.module#STUDENTSEditModule' , canActivate: [AuthGuard] },
    { path: 'studentses',  loadChildren: './pages/studentslist/studentslist.module#STUDENTSListModule' , canActivate: [AuthGuard] },
    { path: 'subjects/:id',  loadChildren: './pages/subjectedit/subjectedit.module#SUBJECTEditModule' , canActivate: [AuthGuard] },
    { path: 'subjects',  loadChildren: './pages/subjectlist/subjectlist.module#SUBJECTListModule' , canActivate: [AuthGuard] },
    { path: 'teacherses/:id',  loadChildren: './pages/teachersedit/teachersedit.module#TEACHERSEditModule' , canActivate: [AuthGuard] },
    { path: 'teacherses',  loadChildren: './pages/teacherslist/teacherslist.module#TEACHERSListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
