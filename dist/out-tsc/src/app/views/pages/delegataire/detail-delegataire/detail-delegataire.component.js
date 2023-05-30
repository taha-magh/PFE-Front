import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DelegataireService } from "../service/delegataire/delegataire.service";
var DetailDelegataireComponent = /** @class */ (function () {
    function DetailDelegataireComponent(router, activatedRoute, delegataireService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.delegataireService = delegataireService;
    }
    DetailDelegataireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var delegataire = _a.delegataire;
            _this.Delegataire = delegataire;
            _this.delegataireService.getDelegataireById(delegataire.id).subscribe(function (res) {
                _this.delegataire = res.body;
                console.log("jjjjjjjjjjjjjjjjjjjjjjjjj", res.body);
            });
        });
    };
    DetailDelegataireComponent.prototype.Back = function () {
        this.router.navigate(["pages/delegataire/delegataires"]);
    };
    DetailDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-detail-delegataire",
            templateUrl: "./detail-delegataire.component.html",
            styleUrls: ["./detail-delegataire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            DelegataireService])
    ], DetailDelegataireComponent);
    return DetailDelegataireComponent;
}());
export { DetailDelegataireComponent };
//# sourceMappingURL=detail-delegataire.component.js.map