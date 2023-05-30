import * as tslib_1 from "tslib";
/** Angular */
import { Injectable } from '@angular/core';
var TypesUtilsService = /** @class */ (function () {
    function TypesUtilsService() {
    }
    /**
     * Convert number to string and addinng '0' before
     *
     * @param value: number
     */
    TypesUtilsService.prototype.padNumber = function (value) {
        if (this.isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    };
    /**
     * Checking value type equals to Number
     *
     * @param value: any
     */
    TypesUtilsService.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    /**
     * Covert value to number
     *
     * @param value: any
     */
    TypesUtilsService.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    /**
     * Convert date to string with 'MM/dd/yyyy' format
     *
     * @param date: Date
     */
    TypesUtilsService.prototype.dateFormat = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        if (date) {
            return month + "/" + day + "/" + year;
        }
        return '';
    };
    /**
     * Convert Date to string with custom format 'MM/dd/yyyy'
     *
     * @param date: any
     */
    TypesUtilsService.prototype.dateCustomFormat = function (date) {
        var stringDate = '';
        if (date) {
            stringDate += this.isNumber(date.month) ? this.padNumber(date.month) + '/' : '';
            stringDate += this.isNumber(date.day) ? this.padNumber(date.day) + '/' : '';
            stringDate += date.year;
        }
        return stringDate;
    };
    /**
     * Convert string to DateFormatter (For Reactive Forms Validators)
     *
     * @param dateInStr: string (format => 'MM/dd/yyyy')
     */
    TypesUtilsService.prototype.getDateFormatterFromString = function (dateInStr) {
        if (dateInStr && dateInStr.length > 0) {
            var dateParts = dateInStr.trim().split('/');
            return [
                {
                    year: this.toInteger(dateParts[2]),
                    month: this.toInteger(dateParts[0]),
                    day: this.toInteger(dateParts[1])
                }
            ];
        }
        var _date = new Date();
        return [
            {
                year: _date.getFullYear(),
                month: _date.getMonth() + 1,
                day: _date.getDay()
            }
        ];
    };
    /**
     * Convert string to Date
     *
     * @param dateInStr: string (format => 'MM/dd/yyyy')
     */
    TypesUtilsService.prototype.getDateFromString = function (dateInStr) {
        if (dateInStr === void 0) { dateInStr = ''; }
        if (dateInStr && dateInStr.length > 0) {
            var dateParts = dateInStr.trim().split('/');
            var year = this.toInteger(dateParts[2]);
            var month = this.toInteger(dateParts[0]);
            var day = this.toInteger(dateParts[1]);
            // tslint:disable-next-line:prefer-const
            var result = new Date();
            result.setDate(day);
            result.setMonth(month - 1);
            result.setFullYear(year);
            return result;
        }
        return new Date();
    };
    /**
     * Convert Date to string with format 'MM/dd/yyyy'
     * @param _date: Date?
     */
    TypesUtilsService.prototype.getDateStringFromDate = function (_date) {
        if (_date === void 0) { _date = new Date(); }
        var month = _date.getMonth() + 1;
        var year = _date.getFullYear();
        var date = _date.getDate();
        return month + "/" + date + "/" + year;
    };
    TypesUtilsService = tslib_1.__decorate([
        Injectable()
    ], TypesUtilsService);
    return TypesUtilsService;
}());
export { TypesUtilsService };
//# sourceMappingURL=types-utils.service.js.map