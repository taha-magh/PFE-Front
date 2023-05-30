export var PermissionActionTypes;
(function (PermissionActionTypes) {
    PermissionActionTypes["AllPermissionsRequested"] = "[Init] All Permissions Requested";
    PermissionActionTypes["AllPermissionsLoaded"] = "[Init] All Permissions Loaded";
})(PermissionActionTypes || (PermissionActionTypes = {}));
var AllPermissionsRequested = /** @class */ (function () {
    function AllPermissionsRequested() {
        this.type = PermissionActionTypes.AllPermissionsRequested;
    }
    return AllPermissionsRequested;
}());
export { AllPermissionsRequested };
var AllPermissionsLoaded = /** @class */ (function () {
    function AllPermissionsLoaded(payload) {
        this.payload = payload;
        this.type = PermissionActionTypes.AllPermissionsLoaded;
    }
    return AllPermissionsLoaded;
}());
export { AllPermissionsLoaded };
//# sourceMappingURL=permission.actions.js.map