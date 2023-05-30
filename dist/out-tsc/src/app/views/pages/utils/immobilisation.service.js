import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_IMMOBILISATION_URL;
var BACKEND_URL_ORG = environment.organisationUrl;
var GED_URL = environment.API_ALFRESCO_URL;
var ImmobilisationService = /** @class */ (function () {
    function ImmobilisationService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.apiURLORG = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    // ====================================
    // charger les liste
    // ====================================
    ImmobilisationService.prototype.getData = function () {
        var statut = this.http.get(this.apiURL + "/statut/index");
        var type = this.http.get(this.apiURL + "/typeImmobilisation/index");
        var emplacements = this.http.get(this.apiURL + "/emplacement/index");
        var motifs = this.http.get(this.apiURL + "/motifReforme/index");
        var marques = this.http.get(this.apiURL + "/marque/index");
        var sousTypes = this.http.get(this.apiURL + "/soustypeImmobilisation/index");
        return forkJoin([statut, type, emplacements, motifs, marques, sousTypes]);
    };
    // ====================================
    // get nbr immobilisation
    // ====================================
    ImmobilisationService.prototype.getNbrImmobilisationByParams = function (type, statut) {
        return this.http.get(this.apiURL + "/immobilisation/stats/" + type + "&" + statut);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    ImmobilisationService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ImmobilisationService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ImmobilisationService.prototype.createObject = function (url, immo) {
        return this.http.post(this.apiURL + url, immo);
    };
    ImmobilisationService.prototype.updateObject = function (url, immo) {
        return this.http.put(this.apiURL + url + immo.id, immo);
    };
    ImmobilisationService.prototype.deleteObject = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    ImmobilisationService.prototype.getAllObjectListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ImmobilisationService.prototype.getAllObjectListByTwoParams = function (url, p1, p2) {
        return this.http.get(this.apiURL + url + p1 + '/' + p2);
    };
    // service organisation
    ImmobilisationService.prototype.getAllDivision = function (url) {
        return this.http.get(this.apiURLORG + url);
    };
    ImmobilisationService.prototype.getAllObjectById = function (url, id) {
        return this.http.get(this.apiURLORG + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    ImmobilisationService.prototype.updloadFileImmobilisation = function (v, id) {
        console.log("taille de fichier immobilisation :" + v.length);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjImmobilisation/multiplefile", formda, { responseType: 'blob' });
    };
    ImmobilisationService.prototype.getByIdImmobilisationFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjImmobilisation/Allpjs/" + f);
    };
    ImmobilisationService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    ImmobilisationService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ImmobilisationService);
    return ImmobilisationService;
}());
export { ImmobilisationService };
//# sourceMappingURL=immobilisation.service.js.map