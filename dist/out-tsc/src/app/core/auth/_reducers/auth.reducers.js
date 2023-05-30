import * as tslib_1 from "tslib";
// Actions
import { AuthActionTypes } from '../_actions/auth.actions';
export var initialAuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false
};
export function authReducer(state, action) {
    if (state === void 0) { state = initialAuthState; }
    switch (action.type) {
        case AuthActionTypes.Login: {
            var _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case AuthActionTypes.Register: {
            var _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case AuthActionTypes.Logout: {
            return initialAuthState;
        }
        case AuthActionTypes.UserLoaded: {
            var _user = action.payload.user;
            return tslib_1.__assign({}, state, { user: _user, isUserLoaded: true });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducers.js.map