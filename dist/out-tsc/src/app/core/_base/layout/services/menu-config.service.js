import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
// RxJS
import { Subject } from 'rxjs';
var MenuConfigService = /** @class */ (function () {
    /**
     * Service Constructor
     */
    function MenuConfigService() {
        // register on config changed event and set default config
        this.onConfigUpdated$ = new Subject();
    }
    /**
     * Returns the menuConfig
     */
    MenuConfigService.prototype.getMenus = function () {
        return this.menuConfig;
    };
    /**
     * Load config
     *
     * @param config: any
     */
    MenuConfigService.prototype.loadConfigs = function (config) {
        this.menuConfig = config;
        this.onConfigUpdated$.next(this.menuConfig);
    };
    MenuConfigService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], MenuConfigService);
    return MenuConfigService;
}());
export { MenuConfigService };
//# sourceMappingURL=menu-config.service.js.map