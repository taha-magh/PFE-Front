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
var ShowSanctionsComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ShowSanctionsComponent(service, router, route, translate, fileService, spinnerService) {
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
    ShowSanctionsComponent.prototype.ngOnInit = function () {
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
    ShowSanctionsComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    tslib_1.__decorate([
        ViewChild(MatAccordion, { static: false }),
        tslib_1.__metadata("design:type", MatAccordion)
    ], ShowSanctionsComponent.prototype, "accordion", void 0);
    ShowSanctionsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-sanctions',
            templateUrl: './show-sanctions.component.html',
            styleUrls: ['./show-sanctions.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], ShowSanctionsComponent);
    return ShowSanctionsComponent;
}());
export { ShowSanctionsComponent };
//# sourceMappingURL=show-sanctions.component.js.map