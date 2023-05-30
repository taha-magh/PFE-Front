import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListFacturesComponent = /** @class */ (function () {
    function ListFacturesComponent(translate, router, datePipe, excelService) {
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
            "N_RECU",
            "TOTAL",
            "MONTANT_T_M",
            "DATE",
            "STATUT",
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
                N_RECU: "112",
                TOTAL: "15000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2020",
                STATUT: "Payé",
            },
            {
                NUM: "2",
                N_RECU: "335",
                TOTAL: "20000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2021",
                STATUT: "Payé",
            },
            {
                NUM: "3",
                N_RECU: "844",
                TOTAL: "30000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2022",
                STATUT: "Payé",
            },
        ];
        this.data2 = [
            {
                NUM: "1",
                N_RECU: "112",
                TOTAL: "15000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2020",
                STATUT: "Non payé",
            },
            {
                NUM: "2",
                N_RECU: "654",
                TOTAL: "20000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2021",
                STATUT: "Non payé",
            },
            {
                NUM: "3",
                N_RECU: "246",
                TOTAL: "30000 Dh",
                MONTANT_T_M: "20",
                DATE: "15/08/2022",
                STATUT: "Non payé",
            },
        ];
    }
    ListFacturesComponent.prototype.ngOnInit = function () {
        this.columns = [
            "NUM",
            "N_RECU",
            "TOTAL",
            "MONTANT_T_M",
            "DATE",
            "STATUT",
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource2 = new MatTableDataSource(this.data2);
    };
    ListFacturesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    // addPesee(): void {
    // 	this.router.navigate(["pages/pesee/add-pesee"]);
    // }
    ListFacturesComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListFacturesComponent.prototype.Details = function () {
        this.router.navigate(["pages/reglement/show-facture"]);
    };
    ListFacturesComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.Pesees[i].NUM,
            N_RECU: this.Pesees[i].OPERATEUR,
            TOTAL: this.Pesees[i].DATE_P,
            MONTANT_T_M: this.Pesees[i].VEHICULE,
            DATE: this.Pesees[i].MONTANT_T_M,
            STATUT: this.Pesees[i].STATUT,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListFacturesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListFacturesComponent.prototype, "sort", void 0);
    ListFacturesComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-factures",
            templateUrl: "./list-factures.component.html",
            styleUrls: ["./list-factures.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListFacturesComponent);
    return ListFacturesComponent;
}());
export { ListFacturesComponent };
//# sourceMappingURL=list-factures.component.js.map