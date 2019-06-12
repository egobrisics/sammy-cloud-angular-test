import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ClientGuard }          from  './client.guard';
 
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [ClientGuard],
        children: [
        {
            path: '',
            canActivateChild: [ClientGuard],
            children: [
                { path: 'patient',  loadChildren: './patient/patient.module#PatientModule', },
            ]
        }
        ]
    }
];
 
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ClientRoutingModule {}
