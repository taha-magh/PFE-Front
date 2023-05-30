// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
import { each } from 'lodash';
export var selectUsersState = createFeatureSelector('users');
export var selectUserById = function (userId) { return createSelector(selectUsersState, function (usersState) { return usersState.entities[userId]; }); };
export var selectUsersPageLoading = createSelector(selectUsersState, function (usersState) {
    return usersState.listLoading;
});
export var selectUsersActionLoading = createSelector(selectUsersState, function (usersState) { return usersState.actionsloading; });
export var selectLastCreatedUserId = createSelector(selectUsersState, function (usersState) { return usersState.lastCreatedUserId; });
export var selectUsersPageLastQuery = createSelector(selectUsersState, function (usersState) { return usersState.lastQuery; });
export var selectUsersInStore = createSelector(selectUsersState, function (usersState) {
    var items = [];
    each(usersState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, usersState.lastQuery.sortField, usersState.lastQuery.sortOrder);
    return new QueryResultsModel(result, usersState.totalCount, '');
});
export var selectUsersShowInitWaitingMessage = createSelector(selectUsersState, function (usersState) { return usersState.showInitWaitingMessage; });
export var selectHasUsersInStore = createSelector(selectUsersState, function (queryResult) {
    if (!queryResult.totalCount) {
        return false;
    }
    return true;
});
//# sourceMappingURL=user.selectors.js.map