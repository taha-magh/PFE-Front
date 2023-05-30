import * as tslib_1 from "tslib";
var _a;
// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
// Actions
import { UserActionTypes } from '../_actions/user.actions';
// CRUD
import { QueryParamsModel } from '../../_base/crud';
export var adapter = createEntityAdapter();
export var initialUsersState = adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new QueryParamsModel({}),
    lastCreatedUserId: undefined,
    showInitWaitingMessage: true
});
export function usersReducer(state, action) {
    if (state === void 0) { state = initialUsersState; }
    switch (action.type) {
        case UserActionTypes.UsersPageToggleLoading: return tslib_1.__assign({}, state, { listLoading: action.payload.isLoading, lastCreatedUserId: undefined });
        case UserActionTypes.UsersActionToggleLoading: return tslib_1.__assign({}, state, { actionsloading: action.payload.isLoading });
        case UserActionTypes.UserOnServerCreated: return tslib_1.__assign({}, state);
        case UserActionTypes.UserCreated: return adapter.addOne(action.payload.user, tslib_1.__assign({}, state, { lastCreatedUserId: action.payload.user.id }));
        case UserActionTypes.UserUpdated: return adapter.updateOne(action.payload.partialUser, state);
        case UserActionTypes.UserDeleted: return adapter.removeOne(action.payload.id, state);
        case UserActionTypes.UsersPageCancelled: return tslib_1.__assign({}, state, { listLoading: false, lastQuery: new QueryParamsModel({}) });
        case UserActionTypes.UsersPageLoaded: {
            return adapter.addMany(action.payload.users, tslib_1.__assign({}, initialUsersState, { totalCount: action.payload.totalCount, lastQuery: action.payload.page, listLoading: false, showInitWaitingMessage: false }));
        }
        default: return state;
    }
}
export var getUserState = createFeatureSelector('users');
export var selectAll = (_a = adapter.getSelectors(), _a.selectAll), selectEntities = _a.selectEntities, selectIds = _a.selectIds, selectTotal = _a.selectTotal;
//# sourceMappingURL=user.reducers.js.map