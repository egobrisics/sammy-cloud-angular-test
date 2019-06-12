import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientGuard } from './client.guard'

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
  ],
  declarations: [DashboardComponent],
  providers: [ClientGuard]
})
export class ClientModule { }
