import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Credentials } from '../models/credentials';
import { AppStore } from '../app.store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthToken } from '../models/auth-token';
import { LOGIN_ACTION, LOGOUT_ACTION } from '../reducers/authentication.reducer';

@Injectable()
export class AuthenticationService {

  public token: AuthToken;

  private baseUri: string;

  constructor(private http: HttpClient, private store: Store<AppStore>, private configService: ConfigurationService) {
    this.baseUri = configService.getBaseUri();

    this.token = JSON.parse(localStorage.getItem('token'));
    
    if (this.token) {
        this.store.dispatch({ type: LOGIN_ACTION , payload: true });
      } else {
        this.store.dispatch({ type: LOGOUT_ACTION , payload: false });
      }
  }

  public login(username: string, password: string): Observable<AuthToken> {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const credentials = new Credentials();
    credentials.username = username;
    credentials.password = password;

    const response = this.http.post<AuthToken>(this.baseUri + '/auth/login/', credentials, { headers });
    response.subscribe((token: AuthToken) => {
        this.token = token;
        localStorage.setItem('token', JSON.stringify(token));
        this.store.dispatch({ type: LOGIN_ACTION , payload: true });
    });

    return response;
  }

  public logout() {
    localStorage.removeItem('token');
    this.store.dispatch({ type: LOGOUT_ACTION , payload: false });
  }

  public isAuthenticated(): Observable<Boolean> {
    return this.store.select(state => state.authenticated);
  }

  public CheckAuthentication(): Boolean {
      return this.token != null;
  }

}
