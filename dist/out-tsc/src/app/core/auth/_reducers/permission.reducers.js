import * as tslib_1 from "tslib";
var _a;
// NGRX
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
// Actions
import { PermissionActionTypes } from '../_actions/permission.actions';
export var adapter = createEntityAdapter();
export var initialPermissionsState = adapter.getInitialState({
    _isAllPermissionsLoaded: false
});
export function permissionsReducer(state, action) {
    if (state === void 0) { state = initialPermissionsState; }
    switch (action.type) {
        case PermissionActionTypes.AllPermissionsRequested:
            return tslib_1.__assign({}, state, { _isAllPermissionsLoaded: false });
        case PermissionActionTypes.AllPermissionsLoaded:
            return adapter.addAll(action.payload.permissions, tslib_1.__assign({}, state, { _isAllPermissionsLoaded: true }));
        default:
            return state;
    }
}
export var getRoleState = createFeatureSelector('permissions');
export var selectAll = (_a = adapter.getSelectors(), _a.selectAll), selectEntities = _a.selectEntities, selectIds = _a.selectIds, selectTotal = _a.selectTotal;
//# sourceMappingURL=permission.reducers.js.map