// NGRX
import { createSelector } from '@ngrx/store';
// Lodash
import { each, find, some } from 'lodash';
// Selectors
import { selectAllRoles } from './role.selectors';
import { selectAllPermissions } from './permission.selectors';
export var selectAuthState = function (state) { return state.auth; };
export var isLoggedIn = createSelector(selectAuthState, function (auth) { return auth.loggedIn; });
export var isLoggedOut = createSelector(isLoggedIn, function (loggedIn) { return !loggedIn; });
export var currentAuthToken = createSelector(selectAuthState, function (auth) { return auth.authToken; });
export var isUserLoaded = createSelector(selectAuthState, function (auth) { return auth.isUserLoaded; });
export var currentUser = createSelector(selectAuthState, function (auth) { return auth.user; });
export var currentUserRoleIds = createSelector(currentUser, function (user) {
    if (!user) {
        return [];
    }
    return user.roles;
});
export var currentUserPermissionsIds = createSelector(currentUserRoleIds, selectAllRoles, function (userRoleIds, allRoles) {
    var result = getPermissionsIdsFrom(userRoleIds, allRoles);
    return result;
});
export var checkHasUserPermission = function (permissionId) { return createSelector(currentUserPermissionsIds, function (ids) {
    return ids.some(function (id) { return id === permissionId; });
}); };
export var currentUserPermissions = createSelector(currentUserPermissionsIds, selectAllPermissions, function (permissionIds, allPermissions) {
    var result = [];
    each(permissionIds, function (id) {
        var userPermission = find(allPermissions, function (elem) { return elem.id === id; });
        if (userPermission) {
            result.push(userPermission);
        }
    });
    return result;
});
function getPermissionsIdsFrom(userRolesIds, allRoles) {
    if (userRolesIds === void 0) { userRolesIds = []; }
    if (allRoles === void 0) { allRoles = []; }
    var userRoles = [];
    each(userRolesIds, function (_id) {
        var userRole = find(allRoles, function (_role) { return _role.id === _id; });
        if (userRole) {
            userRoles.push(userRole);
        }
    });
    var result = [];
    each(userRoles, function (_role) {
        each(_role.permissions, function (id) {
            if (!some(result, function (_id) { return _id === id; })) {
                result.push(id);
            }
        });
    });
    return result;
}
//# sourceMappingURL=auth.selectors.js.map