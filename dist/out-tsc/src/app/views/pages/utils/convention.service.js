import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_CONVENTION;
var GED_URL = environment.API_ALFRESCO_URL;
var ConventionService = /** @class */ (function () {
    function ConventionService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    ConventionService.prototype.getData = function () {
        var statutConvention = this.http.get(this.apiURL + "/statutConvention/index");
        var typeConvention = this.http.get(this.apiURL + "/typeConvention/index");
        return forkJoin([statutConvention, typeConvention]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    ConventionService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ConventionService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ConventionService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ConventionService.prototype.createObject = function (url, immo) {
        return this.http.post(this.apiURL + url, immo);
    };
    ConventionService.prototype.updateObject = function (url, immo) {
        return this.http.put(this.apiURL + url + immo.id, immo);
    };
    ConventionService.prototype.deleteConvention = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    ConventionService.prototype.getAllObjectListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ConventionService.prototype.getConvention = function (id) {
        if (id == null) {
            return this.http.get(this.apiURL + "/convention/index");
        }
        else {
            return this.http.get(this.apiURL + "/convention/index/" + id);
        }
    };
    ConventionService.prototype.getAllConventionListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    ConventionService.prototype.updloadFile = function (v, id) {
        //console.log("taille de fichier  :" + v.length);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjConvention/multiplefile", formda, { responseType: 'blob' });
    };
    ConventionService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjConvention/Allpjs/" + f);
    };
    ConventionService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    ConventionService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ConventionService);
    return ConventionService;
}());
export { ConventionService };
//# sourceMappingURL=convention.service.js.map