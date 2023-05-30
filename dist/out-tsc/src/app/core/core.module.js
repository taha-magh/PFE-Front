import * as tslib_1 from "tslib";
// Anglar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Layout Directives
// Services
import { ContentAnimateDirective, FirstLetterPipe, GetObjectPipe, HeaderDirective, JoinPipe, MenuDirective, OffcanvasDirective, SafePipe, ScrollTopDirective, SparklineChartDirective, StickyDirective, TabClickEventDirective, TimeElapsedPipe, ToggleDirective } from './_base/layout';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule,
            ],
            declarations: [
                // directives
                ScrollTopDirective,
                HeaderDirective,
                OffcanvasDirective,
                ToggleDirective,
                MenuDirective,
                TabClickEventDirective,
                SparklineChartDirective,
                ContentAnimateDirective,
                StickyDirective,
                // pipes
                TimeElapsedPipe,
                JoinPipe,
                GetObjectPipe,
                SafePipe,
                FirstLetterPipe,
            ],
            exports: [
                // directives
                ScrollTopDirective,
                HeaderDirective,
                OffcanvasDirective,
                ToggleDirective,
                MenuDirective,
                TabClickEventDirective,
                SparklineChartDirective,
                ContentAnimateDirective,
                StickyDirective,
                // pipes
                TimeElapsedPipe,
                JoinPipe,
                GetObjectPipe,
                SafePipe,
                FirstLetterPipe,
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map