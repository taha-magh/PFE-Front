import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var TypeIndicSdlService = /** @class */ (function () {
    function TypeIndicSdlService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/type-indic-sdls');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api');
    }
    TypeIndicSdlService.prototype.getAllTypeIndicSdl = function (req) {
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
    TypeIndicSdlService.prototype.addTypeIndicSdl = function (typeIndicSdl) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, typeIndicSdl, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicSdlService.prototype.updateTypeIndicSdl = function (typeIndicSdl) {
        console.log("-*-*-*-*>>", typeIndicSdl);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, typeIndicSdl, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicSdlService.prototype.deleteTypeIndicSdl = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicSdlService.prototype.query = function (req) {
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
    TypeIndicSdlService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicSdlService.prototype.getTypeIndicSdlById = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TypeIndicSdlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], TypeIndicSdlService);
    return TypeIndicSdlService;
}());
export { TypeIndicSdlService };
//# sourceMappingURL=type-indic-sdl.service.js.map