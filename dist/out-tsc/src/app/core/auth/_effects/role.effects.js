import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
// NGRX
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// Services
import { AuthService } from '../_services';
// Actions
import { RolesPageToggleLoading, RolesActionToggleLoading } from '../_actions/role.actions';
var RoleEffects = /** @class */ (function () {
    /*  @Effect()
      loadAllRoles$ = this.actions$
          .pipe(
              ofType<AllRolesRequested>(RoleActionTypes.AllRolesRequested),
              withLatestFrom(this.store.pipe(select(allRolesLoaded))),
              filter(([action, isAllRolesLoaded]) => !isAllRolesLoaded),
              mergeMap(() => this.auth.getAllRoles()),
              map(roles => {
                 
                  return new AllRolesLoaded({roles});
              })
            );
  
      @Effect()
      loadRolesPage$ = this.actions$
          .pipe(
              ofType<RolesPageRequested>(RoleActionTypes.RolesPageRequested),
              mergeMap(( { payload } ) => {
                  this.store.dispatch(this.showPageLoadingDistpatcher);
                  const requestToServer = this.auth.findRoles(payload.page);
                  const lastQuery = of(payload.page);
                  return forkJoin(requestToServer, lastQuery);
              }),
              map(response => {
                  const result: QueryResultsModel = response[0];
                  const lastQuery: QueryParamsModel = response[1];
                  this.store.dispatch(this.hidePageLoadingDistpatcher);
  
                  return new RolesPageLoaded({
                      roles: result.items,
                      totalCount: result.totalCount,
                      page: lastQuery
                  });
              }),
          );
  
      @Effect()
      deleteRole$ = this.actions$
          .pipe(
              ofType<RoleDeleted>(RoleActionTypes.RoleDeleted),
              mergeMap(( { payload } ) => {
                      this.store.dispatch(this.showActionLoadingDistpatcher);
                      return this.auth.deleteRole(payload.id);
                  }
              ),
              map(() => {
                  return this.hideActionLoadingDistpatcher;
              }),
          );
  
      @Effect()
      updateRole$ = this.actions$
          .pipe(
              ofType<RoleUpdated>(RoleActionTypes.RoleUpdated),
              mergeMap(( { payload } ) => {
                  this.store.dispatch(this.showActionLoadingDistpatcher);
                  return this.auth.updateRole(payload.role);
              }),
              map(() => {
                  return this.hideActionLoadingDistpatcher;
              }),
          );
  
  
      @Effect()
      createRole$ = this.actions$
          .pipe(
              ofType<RoleOnServerCreated>(RoleActionTypes.RoleOnServerCreated),
              mergeMap(( { payload } ) => {
                  this.store.dispatch(this.showActionLoadingDistpatcher);
                  return this.auth.createRole(payload.role).pipe(
                      tap(res => {
                          this.store.dispatch(new RoleCreated({ role: res }));
                      })
                  );
              }),
              map(() => {
                  return this.hideActionLoadingDistpatcher;
              }),
          );
  
      @Effect()
      init$: Observable<Action> = defer(() => {
          return of(new AllRolesRequested());
      });
  */
    function RoleEffects(actions$, auth, store) {
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new RolesPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new RolesPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new RolesActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new RolesActionToggleLoading({ isLoading: false });
    }
    RoleEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Actions, AuthService, Store])
    ], RoleEffects);
    return RoleEffects;
}());
export { RoleEffects };
//# sourceMappingURL=role.effects.js.map