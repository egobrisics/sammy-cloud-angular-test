import { Patient } from "../models/patient";
import { LOGOUT_ACTION } from "./authentication.reducer";

export const PATIENT_ACTION = 'PATIENT';

export function PatientReducer(state: Patient = null, action) {
    switch (action.type) {
        case PATIENT_ACTION:
            return action.payload;
        case LOGOUT_ACTION:
            return null;
        default:
            return state;
    }
}
