import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var TypeIndicDelegataireService = /** @class */ (function () {
    function TypeIndicDelegataireService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/type-indic-delegataires');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api');
    }
    TypeIndicDelegataireService.prototype.getAllTypeIndicDelegataire = function (req) {
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
    TypeIndicDelegataireService.prototype.addTypeIndicDelegataire = function (typeIndicDelegataire) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, typeIndicDelegataire, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicDelegataireService.prototype.updateTypeIndicDelegataire = function (typeIndicDelegataire) {
        console.log("-*-*-*-*>>", typeIndicDelegataire);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, typeIndicDelegataire, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicDelegataireService.prototype.deleteTypeIndicDelegataire = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicDelegataireService.prototype.query = function (req) {
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
    TypeIndicDelegataireService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicDelegataireService.prototype.getTypeIndicDelegataireById = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicDelegataireService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], TypeIndicDelegataireService);
    return TypeIndicDelegataireService;
}());
export { TypeIndicDelegataireService };
//# sourceMappingURL=type-indic-delegataire.service.js.map