import * as tslib_1 from "tslib";
var _a;
// NGRX
import { createEntityAdapter } from '@ngrx/entity';
// Actions
import { RoleActionTypes } from '../_actions/role.actions';
import { QueryParamsModel } from '../../_base/crud';
export var adapter = createEntityAdapter();
export var initialRolesState = adapter.getInitialState({
    isAllRolesLoaded: false,
    queryRowsCount: 0,
    queryResult: [],
    lastCreatedRoleId: undefined,
    listLoading: false,
    actionsloading: false,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});
export function rolesReducer(state, action) {
    if (state === void 0) { state = initialRolesState; }
    switch (action.type) {
        case RoleActionTypes.RolesPageToggleLoading: return tslib_1.__assign({}, state, { listLoading: action.payload.isLoading, lastCreatedRoleId: undefined });
        case RoleActionTypes.RolesActionToggleLoading: return tslib_1.__assign({}, state, { actionsloading: action.payload.isLoading });
        case RoleActionTypes.RoleOnServerCreated: return tslib_1.__assign({}, state);
        case RoleActionTypes.RoleCreated: return adapter.addOne(action.payload.role, tslib_1.__assign({}, state, { lastCreatedRoleId: action.payload.role.id }));
        case RoleActionTypes.RoleUpdated: return adapter.updateOne(action.payload.partialrole, state);
        case RoleActionTypes.RoleDeleted: return adapter.removeOne(action.payload.id, state);
        case RoleActionTypes.AllRolesLoaded: return adapter.addAll(action.payload.roles, tslib_1.__assign({}, state, { isAllRolesLoaded: true }));
        case RoleActionTypes.RolesPageCancelled: return tslib_1.__assign({}, state, { listLoading: false, queryRowsCount: 0, queryResult: [], lastQuery: new QueryParamsModel({}) });
        case RoleActionTypes.RolesPageLoaded: return adapter.addMany(action.payload.roles, tslib_1.__assign({}, initialRolesState, { listLoading: false, queryRowsCount: action.payload.totalCount, queryResult: action.payload.roles, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        default: return state;
    }
}
export var selectAll = (_a = adapter.getSelectors(), _a.selectAll), selectEntities = _a.selectEntities, selectIds = _a.selectIds, selectTotal = _a.selectTotal;
//# sourceMappingURL=role.reducers.js.map