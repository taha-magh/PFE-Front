import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListRetraiteComponent = /** @class */ (function () {
    function ListRetraiteComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.data = [];
        this.data2 = [];
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
            "Matricule",
            "actions",
        ];
        this.displayedColumns2 = [
            "NUM",
            "Nom",
            "Prenom",
            "Cin",
            "Division",
            "Service",
            "Poste",
            "Date_arrete",
            "Dure_service",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.dataSource2 = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                NUM: "1",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Annee: "sample text",
                Dure_service: "sample text",
            },
        ];
        this.data2 = [
            {
                NUM: "1",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Date_arrete: "sample text",
                Dure_service: "sample text",
            },
        ];
    }
    ListRetraiteComponent.prototype.ngOnInit = function () {
        // this.columns = [
        // 	"NUM",
        // 	"Nom",
        // 	"Prenom",
        // 	"Matricule",
        // 	"Cin",
        // 	"Division",
        // 	"Service",
        // 	"Poste",
        // 	"Annee",
        // 	"Dure_service",
        // ];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource2 = new MatTableDataSource(this.data2);
    };
    ListRetraiteComponent.prototype.applyFilter = function (filterValue) {
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
    ListRetraiteComponent.prototype.Details = function () {
        this.router.navigate(["pages/retraite/show-retraite"]);
    };
    ListRetraiteComponent.prototype.Prolonger = function () {
        this.router.navigate(["pages/retraite/add-prolongement"]);
    };
    ListRetraiteComponent.prototype.AddDemande = function () {
        this.router.navigate(["pages/retraite/add-demande-retraite"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListRetraiteComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListRetraiteComponent.prototype, "sort", void 0);
    ListRetraiteComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-retraite",
            templateUrl: "./list-retraite.component.html",
            styleUrls: ["./list-retraite.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListRetraiteComponent);
    return ListRetraiteComponent;
}());
export { ListRetraiteComponent };
//# sourceMappingURL=list-retraite.component.js.map