import { AuthToken } from './models/auth-token';
import { Patient } from './models/patient';

export interface AppStore {
    authenticated: Boolean;
    currentPatient: Patient;
}
