import * as tslib_1 from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpExtenstionsModel } from '../../crud/models/http-extentsions-model';
var HttpUtilsService = /** @class */ (function () {
    function HttpUtilsService() {
    }
    /**
     * Prepare query http params
     * @param queryParams: QueryParamsModel
     */
    HttpUtilsService.prototype.getFindHTTPParams = function (queryParams) {
        var params = new HttpParams()
            .set('lastNamefilter', queryParams.filter)
            .set('sortOrder', queryParams.sortOrder)
            .set('sortField', queryParams.sortField)
            .set('pageNumber', queryParams.pageNumber.toString())
            .set('pageSize', queryParams.pageSize.toString());
        return params;
    };
    /**
     * get standard content-type
     */
    HttpUtilsService.prototype.getHTTPHeaders = function () {
        var result = new HttpHeaders();
        result.set('Content-Type', 'application/json');
        return result;
    };
    HttpUtilsService.prototype.baseFilter = function (_entities, _queryParams, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    };
    HttpUtilsService.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    };
    HttpUtilsService.prototype.searchInArray = function (_incomingArray, _queryObj, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    };
    HttpUtilsService = tslib_1.__decorate([
        Injectable()
    ], HttpUtilsService);
    return HttpUtilsService;
}());
export { HttpUtilsService };
//# sourceMappingURL=http-utils.service.js.map