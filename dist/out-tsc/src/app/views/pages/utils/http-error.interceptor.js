import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
// Created on 24/12/2020 export class HttpErrorInterceptor implements HttpInterceptor {
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router) {
        this.router = router;
    }
    HttpErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
//# sourceMappingURL=http-error.interceptor.js.map