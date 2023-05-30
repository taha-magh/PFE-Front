import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
var GED_URL = environment.API_ALFRESCO_URL;
var FolderServiceService = /** @class */ (function () {
    function FolderServiceService(http) {
        this.http = http;
        this.AlfrescoURL = "" + GED_URL;
    }
    //================ Upload file ==============
    FolderServiceService.prototype.updloadFileCourrierEntrant = function (v, id) {
        //console.log("in send ----------");
        //console.log(v);
        console.log("taille de fichier :" + v.length);
        //console.log(v.name);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjCourriersEntrants/multiplefile", formda);
    };
    FolderServiceService.prototype.getByIdCourrierFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjCourriersEntrants/Allpjs/" + f);
    };
    //   =====================================================================
    FolderServiceService.prototype.updloadFileCourrierSortant = function (v, id) {
        console.log("taille de fichier courrier sortant :" + v.length);
        var formda = new FormData();
        for (var i = 0; i < v.length; i++) {
            formda.append("file", v[i]);
        }
        formda.append("id", id);
        return this.http.post(this.AlfrescoURL + "/PjCourriersSortants/multiplefile", formda);
    };
    FolderServiceService.prototype.getByIdCourrierSortantFiles = function (f) {
        return this.http.get(this.AlfrescoURL + "/PjCourriersSortants/Allpjs/" + f);
    };
    FolderServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FolderServiceService);
    return FolderServiceService;
}());
export { FolderServiceService };
//# sourceMappingURL=folder-service.service.js.map