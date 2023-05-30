import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_SUBVENTION_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var SubventionsService = /** @class */ (function () {
    function SubventionsService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    SubventionsService.prototype.getData = function () {
        var etat = this.http.get(this.apiURL + "/etatSubvention/index");
        var type = this.http.get(this.apiURL + "/typeSubvention/index");
        var sousType = this.http.get(this.apiURL + "/sousTypeSubvention/index");
        var organisme = this.http.get(this.apiURL + "/organismeAccueil/index");
        var fournisseur = this.http.get(this.apiURL + "/fournisseurRestauration/index");
        var frs_impression = this.http.get(this.apiURL + "/fournisseurImpression/index");
        return forkJoin([etat, type, sousType, organisme, fournisseur, frs_impression]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    SubventionsService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    SubventionsService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    SubventionsService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    SubventionsService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    SubventionsService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    SubventionsService.prototype.deleteSubvention = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    SubventionsService.prototype.getAllSubventionListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    SubventionsService.prototype.getAllSubvention = function (url) {
        return this.http.get(this.apiURL + url);
    };
    // ====================================
    // Upload files
    // ====================================
    SubventionsService.prototype.updloadFile = function (v, id, repo) {
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/" + repo + "/multiplefile", formda, { responseType: 'blob' });
    };
    SubventionsService.prototype.getByIdFiles = function (f, repo) {
        return this.http.get(this.AlfrescoURL + "/" + repo + "/Allpjs/" + f);
    };
    SubventionsService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    SubventionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SubventionsService);
    return SubventionsService;
}());
export { SubventionsService };
//# sourceMappingURL=subventions.service.js.map