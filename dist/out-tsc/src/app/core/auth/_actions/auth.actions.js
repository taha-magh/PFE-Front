export var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Login] Action";
    AuthActionTypes["Logout"] = "[Logout] Action";
    AuthActionTypes["Register"] = "[Register] Action";
    AuthActionTypes["UserRequested"] = "[Request User] Action";
    AuthActionTypes["UserLoaded"] = "[Load User] Auth API";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());
export { Login };
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());
export { Logout };
var Register = /** @class */ (function () {
    function Register(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Register;
    }
    return Register;
}());
export { Register };
var UserRequested = /** @class */ (function () {
    function UserRequested() {
        this.type = AuthActionTypes.UserRequested;
    }
    return UserRequested;
}());
export { UserRequested };
var UserLoaded = /** @class */ (function () {
    function UserLoaded(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UserLoaded;
    }
    return UserLoaded;
}());
export { UserLoaded };
//# sourceMappingURL=auth.actions.js.map