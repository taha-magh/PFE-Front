import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_PROJET_PARTENARIAT;
var GED_URL = environment.API_ALFRESCO_URL;
var ProjetService = /** @class */ (function () {
    function ProjetService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    ProjetService.prototype.getData = function () {
        var typePartenariat = this.http.get(this.apiURL + "/typeProjet/index");
        return forkJoin([typePartenariat]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    ProjetService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ProjetService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ProjetService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ProjetService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    ProjetService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    ProjetService.prototype.deleteProjetPartenariat = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    ProjetService.prototype.getAllProjetPartenariatListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    ProjetService.prototype.updloadFile = function (v, id) {
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjProjetPartenariat/multiplefile", formda, { responseType: 'blob' });
    };
    ProjetService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjProjetPartenariat/Allpjs/" + f);
    };
    ProjetService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    ProjetService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProjetService);
    return ProjetService;
}());
export { ProjetService };
//# sourceMappingURL=projet-part.service.js.map