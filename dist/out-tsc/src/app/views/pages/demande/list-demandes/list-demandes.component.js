import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListDemandesComponent = /** @class */ (function () {
    function ListDemandesComponent(translate, router, datePipe, excelService) {
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
            "CIN_D",
            "CIN_P",
            "OBJET",
            "DATE_C",
            "STATUT",
            "DESCRIPTION_C",
            "REMARQUE",
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
                CIN_D: "A65654",
                CIN_P: "------",
                OBJET: "objet1",
                DATE_C: "18/06/2020",
                STATUT: "statut1",
                DESCRIPTION_C: "description1",
                REMARQUE: "remarque1",
            },
            {
                NUM: "2",
                CIN_D: "-----",
                CIN_P: "B5655",
                OBJET: "objet2",
                DATE_C: "18/09/2022",
                STATUT: "statut2",
                DESCRIPTION_C: "description2",
                REMARQUE: "remarque2",
            },
            {
                NUM: "3",
                CIN_D: "-----",
                CIN_P: "B5655",
                OBJET: "objet3",
                DATE_C: "18/09/2022",
                STATUT: "statut3",
                DESCRIPTION_C: "description3",
                REMARQUE: "remarque3",
            },
            {
                NUM: "4",
                CIN_D: "-----",
                CIN_P: "B5655",
                OBJET: "objet4",
                DATE_C: "18/09/2022",
                STATUT: "statut4",
                DESCRIPTION_C: "description4",
                REMARQUE: "remarque4",
            },
            {
                NUM: "5",
                CIN_D: "-----",
                CIN_P: "B5655",
                OBJET: "objet5",
                DATE_C: "18/09/2022",
                STATUT: "statut5",
                DESCRIPTION_C: "description5",
                REMARQUE: "remarque5",
            },
        ];
    }
    ListDemandesComponent.prototype.ngOnInit = function () {
        this.columns = [
            "NUM",
            "CIN_D",
            "CIN_P",
            "OBJET",
            "DATE_C",
            "STATUT",
            "DESCRIPTION_C",
            "REMARQUE",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListDemandesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListDemandesComponent.prototype.deleteAssociation = function (id) {
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
    ListDemandesComponent.prototype.gavel = function (id) {
        var _this = this;
        Swal.fire({
            title: "Message ?",
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
                    title: _this.translate.instant("Success"),
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    //changes
    ListDemandesComponent.prototype.addDemande = function () {
        this.router.navigate(["pages/demande/add-demande"]);
    };
    ListDemandesComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListDemandesComponent.prototype.Details = function () {
        this.router.navigate(["pages/demande/show-demande"]);
    };
    ListDemandesComponent.prototype.Edit = function () {
        this.router.navigate(["pages/demande/edit-demande"]);
    };
    ListDemandesComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.Pesees[i].NUM,
            CIN_D: this.Pesees[i].CIN_D,
            CIN_P: this.Pesees[i].CIN_P,
            OBJET: this.Pesees[i].OBJET,
            DATE_C: this.Pesees[i].DATE_C,
            STATUT: this.Pesees[i].STATUT,
            DESCRIPTION_C: this.Pesees[i].DESCRIPTION_C,
            REMARQUE: this.Pesees[i].REMARQUE,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListDemandesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListDemandesComponent.prototype, "sort", void 0);
    ListDemandesComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-demandes",
            templateUrl: "./list-demandes.component.html",
            styleUrls: ["./list-demandes.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListDemandesComponent);
    return ListDemandesComponent;
}());
export { ListDemandesComponent };
//# sourceMappingURL=list-demandes.component.js.map