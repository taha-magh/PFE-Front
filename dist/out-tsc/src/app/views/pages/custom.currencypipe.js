import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-MA';
registerLocaleData(localeAr, 'ar');
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
var MycurrencyPipe = /** @class */ (function () {
    function MycurrencyPipe() {
        if (localStorage.getItem("language") == 'fr') {
            this.code = 'Dhs';
        }
        else {
            this.code = 'درهم';
        }
    }
    MycurrencyPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
        if (currencyCode === void 0) { currencyCode = this.code; }
        if (display === void 0) { display = 'symbol'; }
        if (digitsInfo === void 0) { digitsInfo = '3.2-2'; }
        if (locale === void 0) { locale = localStorage.getItem("language"); }
        return formatCurrency(value, locale, getCurrencySymbol(currencyCode, 'wide'), currencyCode, digitsInfo);
    };
    MycurrencyPipe = tslib_1.__decorate([
        Pipe({
            name: 'macurrency',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MycurrencyPipe);
    return MycurrencyPipe;
}());
export { MycurrencyPipe };
//# sourceMappingURL=custom.currencypipe.js.map