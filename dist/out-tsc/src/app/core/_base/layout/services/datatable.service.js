import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var API_DATATABLE_URL = 'api/cars';
var DataTableService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param http: HttpClient
     */
    function DataTableService(http) {
        this.http = http;
    }
    /**
     * Returns data from fake server
     */
    DataTableService.prototype.getAllItems = function () {
        return this.http.get(API_DATATABLE_URL);
    };
    DataTableService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataTableService);
    return DataTableService;
}());
export { DataTableService };
//# sourceMappingURL=datatable.service.js.map