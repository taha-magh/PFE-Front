import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var StructureSdlService = /** @class */ (function () {
    function StructureSdlService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/structure-sdls');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api');
    }
    StructureSdlService.prototype.getAllStructureSdl = function (req) {
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
    StructureSdlService.prototype.addStructureSdl = function (structureSdl) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, structureSdl, {
            observe: "response",
            headers: headers,
        });
    };
    StructureSdlService.prototype.updateStructureSdl = function (structureSdl) {
        console.log("-*-*-*-*>>", structureSdl);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, structureSdl, {
            observe: "response",
            headers: headers,
        });
    };
    StructureSdlService.prototype.deleteStructureSdl = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureSdlService.prototype.query = function (req) {
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
    StructureSdlService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureSdlService.prototype.getStructureSdlById = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    StructureSdlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], StructureSdlService);
    return StructureSdlService;
}());
export { StructureSdlService };
//# sourceMappingURL=structure-sdl.service.js.map