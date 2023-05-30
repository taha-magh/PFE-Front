import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var StructureDelegataireService = /** @class */ (function () {
    function StructureDelegataireService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/structure-delegataires');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api');
    }
    StructureDelegataireService.prototype.getAllStructureDelegataire = function (req) {
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
    StructureDelegataireService.prototype.addStructureDelegataire = function (structureDelegataire) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, structureDelegataire, {
            observe: "response",
            headers: headers,
        });
    };
    StructureDelegataireService.prototype.updateStructureDelegataire = function (structureDelegataire) {
        console.log("-*-*-*-*>>", structureDelegataire);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, structureDelegataire, {
            observe: "response",
            headers: headers,
        });
    };
    StructureDelegataireService.prototype.deleteStructureDelegataire = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureDelegataireService.prototype.query = function (req) {
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
    StructureDelegataireService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureDelegataireService.prototype.getStructureDelegataireById = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureDelegataireService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], StructureDelegataireService);
    return StructureDelegataireService;
}());
export { StructureDelegataireService };
//# sourceMappingURL=structure-delegataire.service.js.map