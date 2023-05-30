import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var TabSdlService = /** @class */ (function () {
    function TabSdlService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/suivi-sdls/');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api/');
    }
    TabSdlService.prototype.getAllSuiviSdl = function (req) {
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
    TabSdlService.prototype.addSuiviSdl = function (suiviSdls) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, suiviSdls, {
            observe: "response",
            headers: headers,
        });
    };
    TabSdlService.prototype.updateSuiviSdl = function (suiviSdls) {
        console.log("-*-*-*-*>>", suiviSdls);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, suiviSdls, {
            observe: "response",
            headers: headers,
        });
    };
    TabSdlService.prototype.deleteSuiviSdl = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabSdlService.prototype.query = function (req) {
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
    TabSdlService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabSdlService.prototype.getSuiviSdlById = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    TabSdlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], TabSdlService);
    return TabSdlService;
}());
export { TabSdlService };
//# sourceMappingURL=tab-sdl.service.js.map