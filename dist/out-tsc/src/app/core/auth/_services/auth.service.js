import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
var USERS_URL = environment.userUrl;
var API_USERS_URL = 'api/users';
var API_ROLES_URL = 'api/roles';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Authentication/Authorization
    AuthService.prototype.login = function (username, password) {
        var cuser = this.http.post(USERS_URL + '/login', { username: username, password: password }).toPromise();
        return forkJoin([cuser]);
    };
    AuthService.prototype.getUserByToken = function () {
        var userToken = localStorage.getItem(environment.authTokenKey);
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Authorization', userToken);
        return this.http.get(USERS_URL + '/comptes/byToken');
    };
    AuthService.prototype.register = function (user) {
        //const httpHeaders = new HttpHeaders();
        //httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(USERS_URL + '/comptes/new', user)
            .pipe(map(function (res) {
            return res;
        }), catchError(function (err) {
            return null;
        }));
    };
    /*
     * Submit forgot password request
     *
     * @param {string} email
     * @returns {Observable<any>}
     */
    AuthService.prototype.requestPassword = function (email) {
        return this.http.get(API_USERS_URL + '/forgot?=' + email)
            .pipe(catchError(this.handleError('forgot-password', [])));
    };
    AuthService.prototype.getAllUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(USERS_URL + '/comptes/index').toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.getUserById = function (userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(USERS_URL + ("/comptes/show/" + userId)).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // DELETE => delete the user from the server
    AuthService.prototype.deleteUser = function (userId) {
        var url = USERS_URL + "/comptes/delete/" + userId;
        return this.http.delete(url);
    };
    // UPDATE => PUT: update the user on the server
    AuthService.prototype.updateUser = function (_user) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
    };
    // CREATE =>  POST: add a new user to the server
    AuthService.prototype.createUser = function (user) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL, user, { headers: httpHeaders });
    };
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    AuthService.prototype.findUsers = function (queryParams) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_USERS_URL + '/findUsers', queryParams, { headers: httpHeaders });
    };
    AuthService.prototype.getRegisterFormData = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, roles, divisions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(USERS_URL + ("/comptes/show/" + id))];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.http.get(USERS_URL + '/roles/index')];
                    case 2:
                        roles = _a.sent();
                        return [4 /*yield*/, this.http.get(environment.organisationUrl + '/divisions/index')];
                    case 3:
                        divisions = _a.sent();
                        return [2 /*return*/, forkJoin([user, roles, divisions]).toPromise()];
                }
            });
        });
    };
    AuthService.prototype.updateCompte = function (compte, id) {
        return this.http.put(USERS_URL + '/comptes/edit/' + id, compte);
    };
    // Permission
    /* getRolePermissions(roleId: number): Observable<Permission[]> {
        return this.http.get<Permission[]>(API_PERMISSION_URL + '/getRolePermission?=' + roleId);
    } */
    // Roles
    AuthService.prototype.getAllRoles = function () {
        return this.http.get(USERS_URL + '/roles/all');
    };
    AuthService.prototype.getRoleIndex = function () {
        var roles = this.http.get(USERS_URL + '/roles/index').toPromise();
        return forkJoin(roles);
    };
    AuthService.prototype.getRoleById = function (roleId) {
        return this.http.get(USERS_URL + ("/roles/show/" + roleId));
    };
    // CREATE =>  POST: add a new role to the server
    AuthService.prototype.createRole = function (role) {
        // Note: Add headers if needed (tokens/bearer)
        //const httpHeaders = new HttpHeaders();
        //httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(USERS_URL + '/roles/new', role);
    };
    // UPDATE => PUT: update the role on the server
    AuthService.prototype.updateRole = function (role) {
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
    };
    // DELETE => delete the role from the server
    AuthService.prototype.deleteRole = function (roleId) {
        var url = API_ROLES_URL + "/" + roleId;
        return this.http.delete(url);
    };
    // Check Role Before deletion
    AuthService.prototype.isRoleAssignedToUsers = function (roleId) {
        return this.http.get(API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleId);
    };
    AuthService.prototype.findRoles = function (queryParams) {
        // This code imitates server calls
        var httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(API_ROLES_URL + '/findRoles', queryParams, { headers: httpHeaders });
    };
    /*
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map