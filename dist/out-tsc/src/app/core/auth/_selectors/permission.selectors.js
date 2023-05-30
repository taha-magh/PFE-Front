// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPermissions from '../_reducers/permission.reducers';
export var selectPermissionsState = createFeatureSelector('permissions');
export var selectPermissionById = function (permissionId) { return createSelector(selectPermissionsState, function (ps) { return ps.entities[permissionId]; }); };
export var selectAllPermissions = createSelector(selectPermissionsState, fromPermissions.selectAll);
export var selectAllPermissionsIds = createSelector(selectPermissionsState, fromPermissions.selectIds);
export var allPermissionsLoaded = createSelector(selectPermissionsState, function (ps) { return ps._isAllPermissionsLoaded; });
//# sourceMappingURL=permission.selectors.js.map