import * as tslib_1 from "tslib";
// Angular
import { Component, HostBinding, Input } from '@angular/core';
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        this.classes = 'kt-grid kt-grid--ver kt-grid--root';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ErrorComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ErrorComponent.prototype, "code", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ErrorComponent.prototype, "desc", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], ErrorComponent.prototype, "classes", void 0);
    ErrorComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.scss']
        })
    ], ErrorComponent);
    return ErrorComponent;
}());
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map