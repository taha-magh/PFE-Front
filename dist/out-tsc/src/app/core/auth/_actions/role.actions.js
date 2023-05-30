export var RoleActionTypes;
(function (RoleActionTypes) {
    RoleActionTypes["AllRolesRequested"] = "[Roles Home Page] All Roles Requested";
    RoleActionTypes["AllRolesLoaded"] = "[Roles API] All Roles Loaded";
    RoleActionTypes["RoleOnServerCreated"] = "[Edit Role Dialog] Role On Server Created";
    RoleActionTypes["RoleCreated"] = "[Edit Roles Dialog] Roles Created";
    RoleActionTypes["RoleUpdated"] = "[Edit Role Dialog] Role Updated";
    RoleActionTypes["RoleDeleted"] = "[Roles List Page] Role Deleted";
    RoleActionTypes["RolesPageRequested"] = "[Roles List Page] Roles Page Requested";
    RoleActionTypes["RolesPageLoaded"] = "[Roles API] Roles Page Loaded";
    RoleActionTypes["RolesPageCancelled"] = "[Roles API] Roles Page Cancelled";
    RoleActionTypes["RolesPageToggleLoading"] = "[Roles page] Roles Page Toggle Loading";
    RoleActionTypes["RolesActionToggleLoading"] = "[Roles] Roles Action Toggle Loading";
})(RoleActionTypes || (RoleActionTypes = {}));
var RoleOnServerCreated = /** @class */ (function () {
    function RoleOnServerCreated(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleOnServerCreated;
    }
    return RoleOnServerCreated;
}());
export { RoleOnServerCreated };
var RoleCreated = /** @class */ (function () {
    function RoleCreated(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleCreated;
    }
    return RoleCreated;
}());
export { RoleCreated };
var RoleUpdated = /** @class */ (function () {
    function RoleUpdated(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleUpdated;
    }
    return RoleUpdated;
}());
export { RoleUpdated };
var RoleDeleted = /** @class */ (function () {
    function RoleDeleted(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RoleDeleted;
    }
    return RoleDeleted;
}());
export { RoleDeleted };
var RolesPageRequested = /** @class */ (function () {
    function RolesPageRequested(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageRequested;
    }
    return RolesPageRequested;
}());
export { RolesPageRequested };
var RolesPageLoaded = /** @class */ (function () {
    function RolesPageLoaded(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageLoaded;
    }
    return RolesPageLoaded;
}());
export { RolesPageLoaded };
var RolesPageCancelled = /** @class */ (function () {
    function RolesPageCancelled() {
        this.type = RoleActionTypes.RolesPageCancelled;
    }
    return RolesPageCancelled;
}());
export { RolesPageCancelled };
var AllRolesRequested = /** @class */ (function () {
    function AllRolesRequested() {
        this.type = RoleActionTypes.AllRolesRequested;
    }
    return AllRolesRequested;
}());
export { AllRolesRequested };
var AllRolesLoaded = /** @class */ (function () {
    function AllRolesLoaded(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.AllRolesLoaded;
    }
    return AllRolesLoaded;
}());
export { AllRolesLoaded };
var RolesPageToggleLoading = /** @class */ (function () {
    function RolesPageToggleLoading(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesPageToggleLoading;
    }
    return RolesPageToggleLoading;
}());
export { RolesPageToggleLoading };
var RolesActionToggleLoading = /** @class */ (function () {
    function RolesActionToggleLoading(payload) {
        this.payload = payload;
        this.type = RoleActionTypes.RolesActionToggleLoading;
    }
    return RolesActionToggleLoading;
}());
export { RolesActionToggleLoading };
//# sourceMappingURL=role.actions.js.map