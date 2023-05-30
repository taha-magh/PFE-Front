import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_INSERT_PUB_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var InsertPubService = /** @class */ (function () {
    function InsertPubService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        this.AlfrescoURL = "" + GED_URL;
    }
    InsertPubService.prototype.getData = function () {
        var supports = this.http.get(this.apiURL + "/SupportPublicitaires/index");
        return forkJoin([supports]);
    };
    InsertPubService.prototype.getNbrInsertionByParams = function (support, dateD, dateF) {
        return this.http.get(this.apiURL +
            "/insertionPublicitaires/stats/" +
            support +
            "&" +
            dateD +
            "&" +
            dateF);
    };
    // ========================================
    // methodes service insertion publicitaire
    // ========================================
    InsertPubService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    InsertPubService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    InsertPubService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    InsertPubService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    InsertPubService.prototype.updateObjet = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    InsertPubService.prototype.deleteObject = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    // ==========================================================
    // Upload files
    // ==========================================================
    InsertPubService.prototype.updloadFilePublicitaire = function (v, id) {
        // console.log("taille de fichier immobilisation :" + v.length);
        var formda = new FormData();
        if (v != null) {
            for (var i = 0; i < v.length; i++) {
                formda.append("file", v[i]);
            }
            formda.append("id", id);
            return this.http.post(this.AlfrescoURL + "/PjPublicitaire/multiplefile", formda, { responseType: 'blob' });
        }
    };
    InsertPubService.prototype.getByIdPublicitaireFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjPublicitaire/Allpjs/" + f);
    };
    InsertPubService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    InsertPubService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], InsertPubService);
    return InsertPubService;
}());
export { InsertPubService };
//# sourceMappingURL=insert-pub.service.js.map