import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
var ShowMembreComponent = /** @class */ (function () {
    function ShowMembreComponent(service, router, route, location, translate) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.location = location;
        this.translate = translate;
        this.isLoadingResults = true;
    }
    ShowMembreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/membreBureau/show/", this.id)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            console.log(error);
        });
    };
    // =====================================
    // back to list
    // =====================================
    ShowMembreComponent.prototype.back = function () {
        this.location.back();
        //this.router.navigate(["/associations/list-association"]);
    };
    // ============================================
    // Methode de modification des membre
    // ============================================
    ShowMembreComponent.prototype.editMembre = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/edit-membre/" + this.id]);
    };
    ShowMembreComponent = tslib_1.__decorate([
        Component({
            selector: "kt-show-membre",
            templateUrl: "./show-membre.component.html",
            styleUrls: ["./show-membre.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            Location,
            TranslateService])
    ], ShowMembreComponent);
    return ShowMembreComponent;
}());
export { ShowMembreComponent };
//# sourceMappingURL=show-membre.component.js.map