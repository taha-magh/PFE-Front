// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
import * as fromRole from '../_reducers/role.reducers';
import { each } from 'lodash';
export var selectRolesState = createFeatureSelector('roles');
export var selectRoleById = function (roleId) { return createSelector(selectRolesState, function (rolesState) { return rolesState.entities[roleId]; }); };
export var selectAllRoles = createSelector(selectRolesState, fromRole.selectAll);
export var selectAllRolesIds = createSelector(selectRolesState, fromRole.selectIds);
export var allRolesLoaded = createSelector(selectRolesState, function (rolesState) { return rolesState.isAllRolesLoaded; });
export var selectRolesPageLoading = createSelector(selectRolesState, function (rolesState) { return rolesState.listLoading; });
export var selectRolesActionLoading = createSelector(selectRolesState, function (rolesState) { return rolesState.actionsloading; });
export var selectLastCreatedRoleId = createSelector(selectRolesState, function (rolesState) { return rolesState.lastCreatedRoleId; });
export var selectRolesShowInitWaitingMessage = createSelector(selectRolesState, function (rolesState) { return rolesState.showInitWaitingMessage; });
export var selectQueryResult = createSelector(selectRolesState, function (rolesState) {
    var items = [];
    each(rolesState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, rolesState.lastQuery.sortField, rolesState.lastQuery.sortOrder);
    return new QueryResultsModel(rolesState.queryResult, rolesState.queryRowsCount);
});
//# sourceMappingURL=role.selectors.js.map