import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var TabDelegataireService = /** @class */ (function () {
    function TabDelegataireService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/suivi-delegataires/');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api/');
    }
    TabDelegataireService.prototype.getAllSuiviDelegataire = function (req) {
        var options = createRequestOption(req);
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get("" + this.resourceUrl, {
            params: options,
            observe: 'response',
            headers: headers,
        });
    };
    TabDelegataireService.prototype.addSuiviDelegataire = function (suiviDelegataires) {
        return this.http.post(this.resourceUrl + 'add-suivi-delegataire', suiviDelegataires, { observe: 'response' });
        // return this.http.post<ISuiviDelegataire>(this.resourceUrl, suiviDelegataires, {
        // 	observe: "response",
    };
    TabDelegataireService.prototype.updateSuiviDelegataire = function (suiviDelegataire) {
        console.log("-*-*-*-*>>", suiviDelegataire);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, suiviDelegataire, {
            observe: "response",
            headers: headers,
        });
    };
    TabDelegataireService.prototype.deleteSuiviDelegataire = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabDelegataireService.prototype.query = function (req) {
        var options = createRequestOption(req);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get(this.resourceUrl, {
            params: options,
            observe: "response",
            headers: headers,
        });
    };
    TabDelegataireService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabDelegataireService.prototype.getSuiviDelegataireById = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabDelegataireService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], TabDelegataireService);
    return TabDelegataireService;
}());
export { TabDelegataireService };
//# sourceMappingURL=tab-delegataire.service.js.map