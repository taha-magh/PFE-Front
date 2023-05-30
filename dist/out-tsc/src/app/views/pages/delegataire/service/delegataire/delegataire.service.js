import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../../../core/application-config.service';
import { createRequestOption } from '../../../../../core/request/request-util';
var DelegataireService = /** @class */ (function () {
    function DelegataireService(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/delegataires');
        this.resourceurlglobal = this.applicationConfigService.getEndpointFor('api/');
    }
    // 	public getAllDelegataire(params?: any): Observable<any> {
    // debugger
    //
    // 		 return this.http.get("localhost:8080/api/delegataires" );
    // 	}
    DelegataireService.prototype.getAllDelegataire = function (req) {
        var options = createRequestOption(req);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl, {
            params: options,
            observe: 'response',
            headers: headers,
        });
    };
    DelegataireService.prototype.addDelegataire = function (delegatairess) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.post(this.resourceUrl, delegatairess, {
            observe: "response",
            headers: headers,
        });
    };
    DelegataireService.prototype.updateDelegataire = function (delegataire) {
        console.log('-*-*-*-*>>', delegataire);
        var headers = new HttpHeaders()
            .set('content-type', "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.put("" + this.resourceUrl, delegataire, {
            observe: 'response',
            headers: headers,
        });
    };
    DelegataireService.prototype.deleteDelegataire = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.delete("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    DelegataireService.prototype.query = function (req) {
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
    DelegataireService.prototype.find = function (id) {
        console.log("id==========================>", id);
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    DelegataireService.prototype.getDelegataireById = function (id) {
        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*");
        return this.http.get("" + this.resourceUrl + id, {
            observe: "response",
            headers: headers,
        });
    };
    DelegataireService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ApplicationConfigService])
    ], DelegataireService);
    return DelegataireService;
}());
export { DelegataireService };
//# sourceMappingURL=delegataire.service.js.map