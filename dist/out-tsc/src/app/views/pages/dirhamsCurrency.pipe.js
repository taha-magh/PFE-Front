import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-MA';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
registerLocaleData(localeFr, 'fr');
var DirhamsCurrencyPipe = /** @class */ (function () {
    function DirhamsCurrencyPipe() {
    }
    DirhamsCurrencyPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
        if (currencyCode === void 0) { currencyCode = 'درهم'; }
        if (display === void 0) { display = 'symbol'; }
        if (digitsInfo === void 0) { digitsInfo = '3.2-2'; }
        if (locale === void 0) { locale = 'fr'; }
        return formatCurrency(value, locale, getCurrencySymbol(currencyCode, 'wide'), currencyCode, digitsInfo);
    };
    DirhamsCurrencyPipe = tslib_1.__decorate([
        Pipe({
            name: 'dirhamsCurrency'
        })
    ], DirhamsCurrencyPipe);
    return DirhamsCurrencyPipe;
}());
export { DirhamsCurrencyPipe };
//# sourceMappingURL=dirhamsCurrency.pipe.js.map