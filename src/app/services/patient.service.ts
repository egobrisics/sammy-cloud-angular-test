import { Injectable } from '@angular/core';
import { AuthToken } from '../models/auth-token';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Patient } from '../models/patient';
import { PATIENT_ACTION } from '../reducers/patient.reducer';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private currentPatient: Patient;
  private baseUri: string;

  constructor(private http: HttpClient,
              private store: Store<AppStore>,
              private configService: ConfigurationService,
              private authService: AuthenticationService) {

      this.baseUri = configService.getBaseUri();

      store.select(state => state.currentPatient).subscribe((data: Patient) => {
        this.currentPatient = data;
      });
  }

  public getPatient(id: number): Observable<Patient> {

    if (this.currentPatient && this.currentPatient.id == id) {
      return this.store.select(state => state.currentPatient);
    }

    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.authService.token.data}`
    });

    const response = this.http.get<Patient>(this.baseUri + '/patients/' + id, { headers });
    response.subscribe((data: Patient) => {
        this.store.dispatch({ type: PATIENT_ACTION, payload: data });
    });

    return this.store.select(state => state.currentPatient);
  }
}
