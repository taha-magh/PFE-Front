import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var AddConcerneParPromotionComponent = /** @class */ (function () {
    function AddConcerneParPromotionComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "NUM",
            "Nom",
            "Prenom",
            "Cin",
            "Division",
            "Service",
            "Poste",
            "Annee",
            "Dure_service",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                NUM: "1",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Annee: "sample text",
                Dure_service: "sample text",
            },
            {
                NUM: "2",
                Nom: "Nom2",
                Prenom: "Prenom2",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Annee: "sample text",
                Dure_service: "sample text",
            },
            {
                NUM: "3",
                Nom: "Nom3",
                Prenom: "Prenom3",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Annee: "sample text",
                Dure_service: "sample text",
            },
        ];
    }
    AddConcerneParPromotionComponent.prototype.ngOnInit = function () {
        this.dataSource = new MatTableDataSource(this.data);
    };
    AddConcerneParPromotionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    // addPesee(): void {
    // 	this.router.navigate(["pages/pesee/add-pesee"]);
    // }
    // EtapeDernier(): void {
    // 	this.router.navigate(["pages/affaires/dashboard"]);
    // }
    AddConcerneParPromotionComponent.prototype.Edit = function () {
        this.router.navigate(["pages/retraite/show-retraite"]);
    };
    AddConcerneParPromotionComponent.prototype.Details = function () {
        this.router.navigate(["pages/retraite/show-retraite"]);
    };
    AddConcerneParPromotionComponent.prototype.AddDemande = function () {
        this.router.navigate(["pages/retraite/add-demande-retraite"]);
    };
    AddConcerneParPromotionComponent.prototype.Add_jugement = function () {
        this.router.navigate(["pages/promotion/add-promotion-par-jugement"]);
    };
    AddConcerneParPromotionComponent.prototype.Add_promotion = function () {
        this.router.navigate(["pages/promotion/add-concerne-par-promotion"]);
    };
    AddConcerneParPromotionComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/promotion/list-promotion"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], AddConcerneParPromotionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], AddConcerneParPromotionComponent.prototype, "sort", void 0);
    AddConcerneParPromotionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-concerne-par-promotion',
            templateUrl: './add-concerne-par-promotion.component.html',
            styleUrls: ['./add-concerne-par-promotion.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], AddConcerneParPromotionComponent);
    return AddConcerneParPromotionComponent;
}());
export { AddConcerneParPromotionComponent };
//# sourceMappingURL=add-concerne-par-promotion.component.js.map