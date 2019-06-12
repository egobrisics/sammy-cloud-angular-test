import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ValueListComponent } from './components/value-list/value-list.component';
import { ValueService } from './services/values.service';
import { HttpModule } from '@angular/http';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthenticationReducer } from './reducers/authentication.reducer';
import { AuthenticationService } from './services/authentication.service'
import { ConfigurationService } from './services/configuration.service';
import { RouterModule } from '@angular/router';
import { PatientReducer } from './reducers/patient.reducer';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    ValueListComponent,
    ClientLoginComponent,
    ClientHeaderComponent,
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    LayoutModule, 
    MaterialModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      authenticated : AuthenticationReducer,
      currentPatient: PatientReducer
    }),
  ],
  providers: [
    ValueService,
    AuthenticationService, 
    ConfigurationService, 
    RouterModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
