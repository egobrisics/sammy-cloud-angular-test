
export const LOGIN_ACTION = 'LOGIN';
export const LOGOUT_ACTION = 'LOGOUT';

export function AuthenticationReducer(state: Boolean = null, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            return true;
        case LOGOUT_ACTION:
            return false;
        default:
            return state;
    }
}
