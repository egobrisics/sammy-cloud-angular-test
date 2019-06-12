import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhysiciansComponent } from './components/physician/physicians.component';
import { AgeSexComponent } from './components/age-sex/age-sex.component';
import { RaceEthnicityComponent } from './components/race-ethnicity/race-ethnicity.component';
import { InsurancesComponent } from './components/insurances/insurances.component';
import { AccessedComponent } from './components/accessed/accessed.component';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    NameComponent, 
    AddressComponent, 
    PhoneComponent, 
    PhysiciansComponent, 
    AgeSexComponent, 
    RaceEthnicityComponent, 
    InsurancesComponent, 
    AccessedComponent, 
    BalanceComponent]
})
export class PatientModule { }
