import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListAffaireJudiciaireComponent = /** @class */ (function () {
    function ListAffaireJudiciaireComponent(translate, router, datePipe, excelService) {
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
            "DATE",
            "STATUT",
            "DESCRIPTION",
            "REMARQUE",
            "AVOCAT",
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
                CIN_D: "A6461",
                CIN_P: "A6555",
                OBJET: "objet1",
                DATE: "18/06/2020",
                STATUT: "statut1",
                DESCRIPTION: "description1",
                REMARQUE: "remarque1",
                AVOCAT: "Bilal",
            },
            {
                NUM: "2",
                CIN_D: "A6461",
                CIN_P: "A6555",
                OBJET: "objet2",
                DATE: "18/06/2020",
                STATUT: "statut2",
                DESCRIPTION: "description2",
                REMARQUE: "remarque2",
                AVOCAT: "Ahmed",
            },
            {
                NUM: "3",
                CIN_D: "A6461",
                CIN_P: "A6555",
                OBJET: "objet3",
                DATE: "18/06/2020",
                STATUT: "statut3",
                DESCRIPTION: "description3",
                REMARQUE: "remarque3",
                AVOCAT: "Ayoub",
            },
            {
                NUM: "4",
                CIN_D: "A6461",
                CIN_P: "A6555",
                OBJET: "objet4",
                DATE: "18/06/2020",
                STATUT: "statut34",
                DESCRIPTION: "description4",
                REMARQUE: "remarque4",
                AVOCAT: "Salwa",
            },
            {
                NUM: "5",
                CIN_D: "A6461",
                CIN_P: "A6555",
                OBJET: "objet5",
                DATE: "18/06/2020",
                STATUT: "statut5",
                DESCRIPTION: "description5",
                REMARQUE: "remarque5",
                AVOCAT: "Mousa",
            },
        ];
    }
    ListAffaireJudiciaireComponent.prototype.ngOnInit = function () {
        this.columns = [
            "NUM",
            "CIN_D",
            "CIN_P",
            "OBJET",
            "DATE",
            "STATUT",
            "DESCRIPTION",
            "REMARQUE",
            "AVOCAT",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListAffaireJudiciaireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListAffaireJudiciaireComponent.prototype.deleteAssociation = function (id) {
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
    ListAffaireJudiciaireComponent.prototype.Archiver = function (id) {
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
    ListAffaireJudiciaireComponent.prototype.add = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/add-affaire-judiciare",
        ]);
    };
    ListAffaireJudiciaireComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListAffaireJudiciaireComponent.prototype.Details = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/show-affaire-judiciare",
        ]);
    };
    ListAffaireJudiciaireComponent.prototype.Edit = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/edit-affaire-judiciare",
        ]);
    };
    ListAffaireJudiciaireComponent.prototype.addDetails = function () {
        this.router.navigate([
            "pages/affaire-judiciaire/add-affaire-judiciare-detail",
        ]);
    };
    ListAffaireJudiciaireComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.Pesees[i].NUM,
            CIN_D: this.Pesees[i].OPERATEUR,
            CIN_P: this.Pesees[i].DATE_P,
            OBJET: this.Pesees[i].VEHICULE,
            DATE: this.Pesees[i].MONTANT_T_M,
            STATUT: this.Pesees[i].STATUT,
            DESCRIPTION: this.Pesees[i].DESCRIPTION,
            REMARQUE: this.Pesees[i].REMARQUE,
            AVOCAT: this.Pesees[i].AVOCAT,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListAffaireJudiciaireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListAffaireJudiciaireComponent.prototype, "sort", void 0);
    ListAffaireJudiciaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-affaire-judiciaire",
            templateUrl: "./list-affaire-judiciaire.component.html",
            styleUrls: ["./list-affaire-judiciaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListAffaireJudiciaireComponent);
    return ListAffaireJudiciaireComponent;
}());
export { ListAffaireJudiciaireComponent };
//# sourceMappingURL=list-affaire-judiciaire.component.js.map