import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListPeseesComponent = /** @class */ (function () {
    function ListPeseesComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.data = [];
        this.data2 = [];
        this.data3 = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "NUM",
            "OPERATEUR",
            "DATE_P",
            "VEHICULE",
            "MONTANT_T_M",
            "STATUT",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.dataSource2 = new MatTableDataSource();
        this.dataSource3 = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                NUM: "1",
                OPERATEUR: "operateur1",
                DATE_P: "18/06/2020",
                VEHICULE: "BMW",
                MONTANT_T_M: "1020 Dh",
                STATUT: "En cours de validation",
            },
            {
                NUM: "2",
                OPERATEUR: "operateur2",
                DATE_P: "18/06/2022",
                VEHICULE: "Toyota",
                MONTANT_T_M: "2000 Dh",
                STATUT: "En cours de validation",
            },
            {
                NUM: "3",
                OPERATEUR: "operateur3",
                DATE_P: "18/06/2022",
                VEHICULE: "Toyota",
                MONTANT_T_M: "3000 Dh",
                STATUT: "En cours de validation",
            },
        ];
        this.data2 = [
            {
                NUM: "1",
                OPERATEUR: "operateur1",
                DATE_P: "18/06/2020",
                VEHICULE: "BMW",
                MONTANT_T_M: "1020 Dh",
                STATUT: "Payé",
            },
            {
                NUM: "2",
                OPERATEUR: "operateur2",
                DATE_P: "18/06/2022",
                VEHICULE: "Toyota",
                MONTANT_T_M: "2000 Dh",
                STATUT: "Payé",
            },
            {
                NUM: "3",
                OPERATEUR: "operateur3",
                DATE_P: "18/06/2022",
                VEHICULE: "Toyota",
                MONTANT_T_M: "3000 Dh",
                STATUT: "Payé",
            },
        ];
        this.data3 = [
            {
                NUM: "1",
                OPERATEUR: "operateur1",
                DATE_P: "18/06/2020",
                VEHICULE: "BMW",
                MONTANT_T_M: "1020 Dh",
                STATUT: "En cours de paiment",
            },
            {
                NUM: "2",
                OPERATEUR: "operateur2",
                DATE_P: "18/06/2022",
                VEHICULE: "BMW",
                MONTANT_T_M: "2000 Dh",
                STATUT: "En cours de paiment",
            },
            {
                NUM: "3",
                OPERATEUR: "operateur3",
                DATE_P: "18/06/2022",
                VEHICULE: "BMW",
                MONTANT_T_M: "3000 Dh",
                STATUT: "En cours de paiment",
            },
        ];
    }
    ListPeseesComponent.prototype.ngOnInit = function () {
        this.columns = [
            "NUM",
            "OPERATEUR",
            "DATE_P",
            "VEHICULE",
            "MONTANT_T_M",
            "STATUT",
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource2 = new MatTableDataSource(this.data2);
        this.dataSource3 = new MatTableDataSource(this.data3);
    };
    ListPeseesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    ListPeseesComponent.prototype.addPesee = function () {
        this.router.navigate(["pages/pesee/add-pesee"]);
    };
    ListPeseesComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListPeseesComponent.prototype.Details = function () {
        this.router.navigate(["pages/pesee/show-pesee"]);
    };
    ListPeseesComponent.prototype.Recu = function () {
        this.router.navigate(["pages/pesee/list-pesees"]);
    };
    ListPeseesComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.Pesees[i].NUM,
            OPERATEUR: this.Pesees[i].OPERATEUR,
            DATE_P: this.Pesees[i].DATE_P,
            VEHICULE: this.Pesees[i].VEHICULE,
            MONTANT_T_M: this.Pesees[i].MONTANT_T_M,
            STATUT: this.Pesees[i].STATUT,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListPeseesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListPeseesComponent.prototype, "sort", void 0);
    ListPeseesComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-pesees",
            templateUrl: "./list-pesees.component.html",
            styleUrls: ["./list-pesees.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListPeseesComponent);
    return ListPeseesComponent;
}());
export { ListPeseesComponent };
//# sourceMappingURL=list-pesees.component.js.map