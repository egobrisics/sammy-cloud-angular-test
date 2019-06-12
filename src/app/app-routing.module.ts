import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent } from './components/client-login/client-login.component';
 
 
const routes: Routes = [
  {
    path: '',
    component: ClientLoginComponent
  },
    {
    path: 'login',
    component: ClientLoginComponent
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
  },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
