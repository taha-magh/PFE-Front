import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_LOCAUX_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var LaucauxService = /** @class */ (function () {
    function LaucauxService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    LaucauxService.prototype.getData = function () {
        var typeLocal = this.http.get(this.apiURL + "/typeLocal/index");
        var Statuts = this.http.get(this.apiURL + "/statutGestion/index");
        return forkJoin([typeLocal, Statuts]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    LaucauxService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    LaucauxService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    LaucauxService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    LaucauxService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    LaucauxService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    LaucauxService.prototype.deleteLocaux = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    LaucauxService.prototype.getAllLocauxListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    LaucauxService.prototype.updloadFile = function (v, id) {
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjLocaux/multiplefile", formda, { responseType: 'blob' });
    };
    LaucauxService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjLocaux/Allpjs/" + f);
    };
    LaucauxService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    LaucauxService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LaucauxService);
    return LaucauxService;
}());
export { LaucauxService };
//# sourceMappingURL=locaux.service.js.map