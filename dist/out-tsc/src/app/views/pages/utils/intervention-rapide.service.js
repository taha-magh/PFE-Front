import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { graphic } from 'echarts';
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_INTERVENTION_URL;
//const GED_URL = environment.API_ALFRESCO_URL;
var InterventionRapideService = /** @class */ (function () {
    function InterventionRapideService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        //public AlfrescoURL = `${GED_URL}`;
        this.AlfrescoURL = environment.API_ALFRESCO_URL;
    }
    InterventionRapideService.prototype.getData = function () {
        var type = this.http.get(this.apiURL + "/typeIntervention/index");
        var statut = this.http.get(this.apiURL + "/statutIntervention/index");
        return forkJoin([type, statut]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    InterventionRapideService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    InterventionRapideService.prototype.getAllObject = function (url, lang) {
        return this.http.get(this.apiURL + url + lang);
    };
    InterventionRapideService.prototype.getAllObjectStats = function (url) {
        return this.http.get(this.apiURL + url);
    };
    InterventionRapideService.prototype.getObjectById = function (url, lang, id) {
        return this.http.get(this.apiURL + url + lang + "/" + id);
    };
    InterventionRapideService.prototype.getObjectByIdEdit = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    InterventionRapideService.prototype.createObject = function (url, immo) {
        return this.http.post(this.apiURL + url, immo);
    };
    InterventionRapideService.prototype.updateObject = function (url, immo) {
        return this.http.put(this.apiURL + url + immo.id, immo);
    };
    InterventionRapideService.prototype.deleteObjet = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    InterventionRapideService.prototype.getAllInterventionListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    InterventionRapideService.prototype.getAllInterventionBetweenDate = function (url, dateD, dateF) {
        return this.http.get(this.apiURL + url + dateD + "&" + dateF);
    };
    // ====================================
    // Upload files
    // ====================================
    InterventionRapideService.prototype.updloadFile = function (v, id) {
        console.log("taille de fichier :" + v.length);
        console.log("id intervention file : " + id);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjInterventionRapide/multiplefile", formda);
    };
    InterventionRapideService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjInterventionRapide/Allpjs/" + f);
    };
    InterventionRapideService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    /*
    async getByIdFiles(id) {
        return await this.http.get<any>(this.AlfrescoURL + "/PjInterventionRapide/Allpjs/" + id).toPromise();
    }
    */
    InterventionRapideService.prototype.getNbrInterventionByParams = function (comme, type, dateD, dateF) {
        return this.http.get(this.apiURL +
            "/interventionRapide/stats/" +
            comme +
            "&" +
            type +
            "&" +
            dateD +
            "&" +
            dateF);
    };
    InterventionRapideService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InterventionRapideService);
    return InterventionRapideService;
}());
export { InterventionRapideService };
//# sourceMappingURL=intervention-rapide.service.js.map