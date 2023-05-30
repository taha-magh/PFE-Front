export var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["AllUsersRequested"] = "[Users Module] All Users Requested";
    UserActionTypes["AllUsersLoaded"] = "[Users API] All Users Loaded";
    UserActionTypes["UserOnServerCreated"] = "[Edit User Component] User On Server Created";
    UserActionTypes["UserCreated"] = "[Edit User Dialog] User Created";
    UserActionTypes["UserUpdated"] = "[Edit User Dialog] User Updated";
    UserActionTypes["UserDeleted"] = "[Users List Page] User Deleted";
    UserActionTypes["UsersPageRequested"] = "[Users List Page] Users Page Requested";
    UserActionTypes["UsersPageLoaded"] = "[Users API] Users Page Loaded";
    UserActionTypes["UsersPageCancelled"] = "[Users API] Users Page Cancelled";
    UserActionTypes["UsersPageToggleLoading"] = "[Users] Users Page Toggle Loading";
    UserActionTypes["UsersActionToggleLoading"] = "[Users] Users Action Toggle Loading";
})(UserActionTypes || (UserActionTypes = {}));
var UserOnServerCreated = /** @class */ (function () {
    function UserOnServerCreated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserOnServerCreated;
    }
    return UserOnServerCreated;
}());
export { UserOnServerCreated };
var UserCreated = /** @class */ (function () {
    function UserCreated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserCreated;
    }
    return UserCreated;
}());
export { UserCreated };
var UserUpdated = /** @class */ (function () {
    function UserUpdated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserUpdated;
    }
    return UserUpdated;
}());
export { UserUpdated };
var UserDeleted = /** @class */ (function () {
    function UserDeleted(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserDeleted;
    }
    return UserDeleted;
}());
export { UserDeleted };
var UsersPageRequested = /** @class */ (function () {
    function UsersPageRequested(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageRequested;
    }
    return UsersPageRequested;
}());
export { UsersPageRequested };
var UsersPageLoaded = /** @class */ (function () {
    function UsersPageLoaded(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageLoaded;
    }
    return UsersPageLoaded;
}());
export { UsersPageLoaded };
var UsersPageCancelled = /** @class */ (function () {
    function UsersPageCancelled() {
        this.type = UserActionTypes.UsersPageCancelled;
    }
    return UsersPageCancelled;
}());
export { UsersPageCancelled };
var UsersPageToggleLoading = /** @class */ (function () {
    function UsersPageToggleLoading(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageToggleLoading;
    }
    return UsersPageToggleLoading;
}());
export { UsersPageToggleLoading };
var UsersActionToggleLoading = /** @class */ (function () {
    function UsersActionToggleLoading(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersActionToggleLoading;
    }
    return UsersActionToggleLoading;
}());
export { UsersActionToggleLoading };
//# sourceMappingURL=user.actions.js.map