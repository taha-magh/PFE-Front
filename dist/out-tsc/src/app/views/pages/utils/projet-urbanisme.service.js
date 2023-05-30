import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
var BACKEND_URL = environment.API_PROJET_URBANISME_URL;
//const GED_URL = environment.API_ALFRESCO_URL;
var ProjetUrbanismeService = /** @class */ (function () {
    function ProjetUrbanismeService(http) {
        this.http = http;
        this.apiURL = "" + BACKEND_URL;
        //public AlfrescoURL = `${GED_URL}`;
        this.AlfrescoURL = environment.API_ALFRESCO_URL;
    }
    ProjetUrbanismeService.prototype.getData = function () {
        var typeProjet = this.http.get(this.apiURL + "/typeProjetUrbanisme/index");
        var statutProjet = this.http.get(this.apiURL + "/statutProjUrbanisme/index");
        var statutAdressage = this.http.get(this.apiURL + "/statutAdressage/index");
        return forkJoin([typeProjet, statutProjet, statutAdressage]);
    };
    // ====================================
    // methodes CRUD
    // ====================================
    ProjetUrbanismeService.prototype.getRessource = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ProjetUrbanismeService.prototype.getAllObject = function (url) {
        return this.http.get(this.apiURL + url);
    };
    ProjetUrbanismeService.prototype.getObjectById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    ProjetUrbanismeService.prototype.getTranslateObjectById = function (url, lang, id) {
        return this.http.get(this.apiURL + url + lang + "/" + id);
    };
    ProjetUrbanismeService.prototype.createObject = function (url, obj) {
        return this.http.post(this.apiURL + url, obj);
    };
    ProjetUrbanismeService.prototype.updateObject = function (url, obj) {
        return this.http.put(this.apiURL + url + obj.id, obj);
    };
    ProjetUrbanismeService.prototype.deleteObjet = function (url, id) {
        return this.http.delete(this.apiURL + url + id);
    };
    ProjetUrbanismeService.prototype.getAllProjetListById = function (url, id) {
        return this.http.get(this.apiURL + url + id);
    };
    // ====================================
    // Upload files
    // ====================================
    ProjetUrbanismeService.prototype.updloadFile = function (v, id) {
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjProjetUrbanisme/multiplefile", formda, { responseType: 'blob' });
    };
    ProjetUrbanismeService.prototype.getByIdFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjProjetUrbanisme/Allpjs/" + f);
    };
    /*
    async getByIdFiles(id) {
        return await this.http.get<any>(this.AlfrescoURL + "/PjProjetUrbanisme/Allpjs/" + id).toPromise();
      }
    */
    ProjetUrbanismeService.prototype.deletefiles = function (url, id) {
        return this.http.delete(this.AlfrescoURL + url + id);
    };
    // ====================================
    // Used for chart services
    // ====================================
    ProjetUrbanismeService.prototype.dailyForecast = function (url) {
        return this.http.get(this.apiURL + "/interventionRapide/grouBy");
        //   .pipe(map(result => result));
    };
    ProjetUrbanismeService.prototype.getApiResponse = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.apiURL + url, {}).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ProjetUrbanismeService.prototype.getAllProjectCountByParams = function (d1, d2, statut) {
        return this.http.get(this.apiURL + "/projetUrbanisme/stats/" + d1 + "&" + d2 + "&" + statut);
    };
    ProjetUrbanismeService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProjetUrbanismeService);
    return ProjetUrbanismeService;
}());
export { ProjetUrbanismeService };
//# sourceMappingURL=projet-urbanisme.service.js.map