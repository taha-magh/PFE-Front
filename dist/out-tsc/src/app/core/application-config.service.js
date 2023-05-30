import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
var ApplicationConfigService = /** @class */ (function () {
    function ApplicationConfigService() {
        this.endpointPrefix = environment.BACKEND_URL;
    }
    ApplicationConfigService.prototype.getEndpointFor = function (api) {
        return "" + this.endpointPrefix + api;
    };
    ApplicationConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: "root",
        })
    ], ApplicationConfigService);
    return ApplicationConfigService;
}());
export { ApplicationConfigService };
//# sourceMappingURL=application-config.service.js.map