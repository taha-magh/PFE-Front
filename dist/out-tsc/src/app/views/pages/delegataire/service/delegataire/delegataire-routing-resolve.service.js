import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Delegataire } from '../../models/delegataire/delagataire.model';
import { DelegataireService } from './delegataire.service';
var DelegataireRoutingResolveService = /** @class */ (function () {
    function DelegataireRoutingResolveService(service, router) {
        this.service = service;
        this.router = router;
    }
    DelegataireRoutingResolveService.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe(mergeMap(function (expert) {
                if (expert != undefined && expert.body) {
                    return of(expert.body);
                }
                else {
                    _this.router.navigate(['404']);
                    return EMPTY;
                }
            }));
        }
        return of(new Delegataire());
    };
    DelegataireRoutingResolveService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [DelegataireService, Router])
    ], DelegataireRoutingResolveService);
    return DelegataireRoutingResolveService;
}());
export { DelegataireRoutingResolveService };
//# sourceMappingURL=delegataire-routing-resolve.service.js.map