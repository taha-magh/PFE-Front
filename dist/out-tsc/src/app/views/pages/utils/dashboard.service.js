import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.cards = function () {
        return [71, 78, 39, 66];
    };
    DashboardService.prototype.getRessourceCharts = function () {
        var host = "http://localhost:9191/interventionRapide/grouBy"; // host intervention
        return this.http.get(host);
    };
    DashboardService.prototype.getApiResponse = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url, {}).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    DashboardService.prototype.realData = function () {
        return [
            {
                "name": "نوعية التدخل أ",
                "y": 1
            },
            {
                "name": "نوعية التدخل ج",
                "y": 2
            },
            {
                "name": "test1",
                "y": 4
            },
            {
                "name": "test2",
                "y": 7
            },
            {
                "name": "test2",
                "y": 12
            }
        ];
    };
    DashboardService.prototype.pieChart = function () {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    };
    DashboardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DashboardService);
    return DashboardService;
}());
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map