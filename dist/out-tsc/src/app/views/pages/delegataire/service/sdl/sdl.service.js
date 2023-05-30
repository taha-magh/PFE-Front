import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var SdlService = /** @class */ (function () {
    function SdlService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/sdls/');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api/');
    }
    SdlService.prototype.getAllSdl = function (req) {
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
    SdlService.prototype.addSdl = function (slds) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.post(this.resourceUrl, slds, {
            observe: 'response',
            headers: headers,
        });
    };
    SdlService.prototype.updateSdl = function (sdl) {
        console.log('-*-*-*-*>>', sdl);
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.put("" + this.resourceUrl, sdl, {
            observe: 'response',
            headers: headers,
        });
    };
    SdlService.prototype.deleteSdl = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.delete("" + this.resourceUrl + id, {
            observe: 'response',
            headers: headers,
        });
    };
    SdlService.prototype.query = function (req) {
        var options = createRequestOption(req);
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get(this.resourceUrl, {
            params: options,
            observe: 'response',
            headers: headers,
        });
    };
    SdlService.prototype.find = function (id) {
        console.log('id==========================>', id);
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get("" + this.resourceUrl + id, {
            observe: 'response',
            headers: headers,
        });
    };
    SdlService.prototype.getSdlById = function (id) {
        var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get("" + this.resourceUrl + id, {
            observe: 'response',
            headers: headers,
        });
    };
    SdlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], SdlService);
    return SdlService;
}());
export { SdlService };
//# sourceMappingURL=sdl.service.js.map