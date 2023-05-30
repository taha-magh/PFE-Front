import * as tslib_1 from "tslib";
import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_ASSOCIATION_URL;
// const BACKEND_URL_ACT = environment.API_ACTIVITE_URL;
// const BACKEND_URL_CONV = environment.API_CONVENTION;
// const BACKEND_URL_SUB = environment.API_SUBVENTION_URL;
// const BACKEND_URL_PROJ = environment.API_PROJET_PARTENARIAT;
// const BACKEND_URL_LOC = environment.API_LOCAUX_URL;
var GED_URL = environment.API_ALFRESCO_URL;
var AssociationService = /** @class */ (function () {
    function AssociationService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        // public apiURL_ACT = `${BACKEND_URL_ACT}`;
        // public apiURL_CNV = `${BACKEND_URL_CONV}`;
        // public apiURL_LOC = `${BACKEND_URL_LOC}`;
        // public apiURL_SUB = `${BACKEND_URL_SUB}`;
        // public apiURL_PROJ = `${BACKEND_URL_PROJ}`;
        this.AlfrescoURL = "" + GED_URL;
    }
    AssociationService.prototype.getData = function () {
        var statutAssociation = this.http.get(this.apiURL + "/statut/index");
        var typeActivite = this.http.get(this.apiURL + "/typeActiviteAssociation/index");
        var villeActivite = this.http.get(this.apiURL + "/villeActivite/index");
        var annexeAdministrative = this.http.get(this.apiURL + "/annexeAdministratif/index");
        return forkJoin([statutAssociation, typeActivite, villeActivite, annexeAdministrative]);
    };
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ASSOCIATION
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    AssociationService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    AssociationService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    AssociationService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    AssociationService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    AssociationService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    AssociationService.prototype.deleteObject = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    AssociationService.prototype.getAllObjectListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    AssociationService.prototype.getSatatAssoctionByid = function (id) {
        return this.http.get(this.apiURL + '/association/stats/' + id);
    };
    AssociationService.prototype.getAssociationbytypeAndSttatus = function (type, statuts) {
        return this.http.get(this.apiURL + "/association/byStatutAndType/" + type + "&" + statuts);
    };
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ALFRESCO
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    AssociationService.prototype.updloadFile = function (v, id) {
        console.log("taille de fichier association :" + v.length);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        formda.append("type", "test");
        return this.http.post(this.AlfrescoURL + "/PjAssociation/multiplefile", formda, { responseType: 'blob' });
    };
    AssociationService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjAssociation/Allpjs/" + f);
    };
    AssociationService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    // for data source files toPromise
    AssociationService.prototype.getFilesById = function (url, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.AlfrescoURL + url + id).pipe(delay(1000)).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*
      deleteOnCasscadAssociation(idAss) {
          this.deletefiles("/associationService/ByIdAssociation/", idAss)
          .subscribe((data) => {
          });
        }
        */
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // SEARCHE MANDAT BETWEEN DATES
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    AssociationService.prototype.getMondatBureauBetweenDates = function (d1, d2) {
        return this.http.get(this.apiURL + "/mandatBureau/date/" + d1 + "&" + d2);
    };
    AssociationService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AssociationService);
    return AssociationService;
}());
export { AssociationService };
//# sourceMappingURL=association.service.js.map