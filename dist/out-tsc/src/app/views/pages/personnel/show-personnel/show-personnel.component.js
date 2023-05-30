import * as tslib_1 from "tslib";
import { AssociationService } from "../../utils/association.service";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { FilesUtilsService } from "../../utils/files-utils.service";
import { SpinnerService } from "../../utils/spinner.service";
var ShowPersonnelComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ShowPersonnelComponent(service, router, route, translate, fileService, spinnerService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.fileService = fileService;
        this.spinnerService = spinnerService;
        // ============================================
        // Datasource mandat
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
        this.history = false;
        // =====================================
        // Declarations
        // =====================================
        this.selected = new FormControl(0);
        this.isLoadingResults = true;
        this.start = true;
        this.assocInfo = false;
        this.nbMembre = 0;
        this.nbrH = 0;
        this.nbrF = 0;
        this.mandatList = [];
        this.tab = [];
        this.myData = new BehaviorSubject(0);
    }
    // =====================================
    // Afficher les details association
    // =====================================
    ShowPersonnelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.details = {
            num: "1/2022",
            nom: "nom affaire 1 ",
            defendresse: "Test",
            tribunal: "Tech ",
            typeAffaire: "Administratif",
            demandresse: "Partie  ",
            dateDepot: "01-12-2019",
            dateDebut: "01-01-2020",
            objet: "Objet d'affaire",
            ville: "Rabat",
        };
        this.id = this.route.snapshot.params["id"];
        this.service.getObjectById("/affaire/show/", this.id).subscribe(function (data) {
            console.log("12222222222");
            console.log(data);
            _this.details = data;
            _this.dataSource = new MatTableDataSource(data);
        }, function (error) {
            console.log(error);
        });
    };
    // =====================================
    // back to list
    // =====================================
    ShowPersonnelComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["pages/personnel/list-personnel"]);
    };
    ShowPersonnelComponent.prototype.sanction = function () {
        this.router.navigate(["pages/personnel/appliquer-sanctions"]);
    };
    ShowPersonnelComponent.prototype.absence = function () {
        this.router.navigate(["pages/personnel/list-absence"]);
    };
    tslib_1.__decorate([
        ViewChild(MatAccordion, { static: false }),
        tslib_1.__metadata("design:type", MatAccordion)
    ], ShowPersonnelComponent.prototype, "accordion", void 0);
    ShowPersonnelComponent = tslib_1.__decorate([
        Component({
            selector: "kt-show-personnel",
            templateUrl: "./show-personnel.component.html",
            styleUrls: ["./show-personnel.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], ShowPersonnelComponent);
    return ShowPersonnelComponent;
}());
export { ShowPersonnelComponent };
//# sourceMappingURL=show-personnel.component.js.map