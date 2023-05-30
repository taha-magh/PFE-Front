import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_ACTIVITE_URL;
var BACKEND_URL_ASS = environment.API_ASSOCIATION_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var ActivitesService = /** @class */ (function () {
    function ActivitesService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.apiASS = "" + BACKEND_URL_ASS;
        this.AlfrescoURL = "" + GED_URL;
    }
    ActivitesService.prototype.getData = function () {
        var type = this.http.get(this.apiURL + "/typeActivite/index");
        var association = this.http.get(this.apiASS + "/association/index");
        var institution = this.http.get(this.apiURL + "/pmActivite/index");
        var arrondissements = this.http.get(this.apiURL + "/arrondActivite/index");
        return forkJoin([type, association, institution, arrondissements]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    ActivitesService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ActivitesService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ActivitesService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ActivitesService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    ActivitesService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    ActivitesService.prototype.deleteActivite = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    ActivitesService.prototype.getAllActivitiesListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    ActivitesService.prototype.updloadFile = function (v, id) {
        //console.log("taille de fichier objbilisation :" + v.length);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjActivite/multiplefile", formda, { responseType: 'blob' });
    };
    ActivitesService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjActivite/Allpjs/" + f);
    };
    ActivitesService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    ActivitesService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ActivitesService);
    return ActivitesService;
}());
export { ActivitesService };
//# sourceMappingURL=activites.service.js.map