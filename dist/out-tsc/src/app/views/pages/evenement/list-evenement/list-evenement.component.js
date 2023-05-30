import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListEvenementComponent = /** @class */ (function () {
    function ListEvenementComponent(translate, router, datePipe, excelService) {
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
            "actions"
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
                OPERATEUR: "sample text",
                DATE_P: "sample text",
                VEHICULE: "sample text",
                MONTANT_T_M: "sample text",
                STATUT: "En cours de validation",
            },
            {
                NUM: "2",
                OPERATEUR: "sample text",
                DATE_P: "sample text",
                VEHICULE: "sample text",
                MONTANT_T_M: "sample text",
                STATUT: "En cours de validation",
            }
        ];
        this.data2 = [
            {
                NUM: "1",
                OPERATEUR: "sample text",
                DATE_P: "sample text",
                VEHICULE: "sample text",
                MONTANT_T_M: "sample text",
                STATUT: "Payé",
            },
            {
                NUM: "2",
                OPERATEUR: "sample text",
                DATE_P: "sample text",
                VEHICULE: "sample text",
                MONTANT_T_M: "sample text",
                STATUT: "Payé",
            },
        ];
        this.data3 = [
            {
                NUM: "1",
                OPERATEUR: "sample text",
                DATE_P: "sample text",
                VEHICULE: "sample text",
                MONTANT_T_M: "sample text",
                STATUT: "En cours de paiment",
            },
        ];
    }
    ListEvenementComponent.prototype.ngOnInit = function () {
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
    ListEvenementComponent.prototype.deleteAssociation = function (id) {
        var _this = this;
        Swal.fire({
            title: "Voulez vous supprimer cet enregistrement ?",
            icon: "question",
            iconHtml: "?",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "Oui",
            cancelButtonText: "Non",
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    ListEvenementComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    ListEvenementComponent.prototype.Add = function () {
        this.router.navigate(["pages/evenement/add-evenement"]);
    };
    ListEvenementComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListEvenementComponent.prototype.Details = function () {
        this.router.navigate(["pages/evenement/show-evenement"]);
    };
    ListEvenementComponent.prototype.Edit = function () {
        this.router.navigate(["pages/evenement/edit-evenement"]);
    };
    ListEvenementComponent.prototype.createDataJson = function (i) {
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
    ], ListEvenementComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListEvenementComponent.prototype, "sort", void 0);
    ListEvenementComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-evenement',
            templateUrl: './list-evenement.component.html',
            styleUrls: ['./list-evenement.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListEvenementComponent);
    return ListEvenementComponent;
}());
export { ListEvenementComponent };
//# sourceMappingURL=list-evenement.component.js.map