import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListCotationComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ListCotationComponent(translate, router, datePipe, excelService) {
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
            "num",
            "nom",
            "dateDebut",
            "tribunal",
            "defendresse",
            "typeAffaire",
            "demandresse",
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
                num: "1",
                nom: "nom affaire 1 ",
                defendresse: "Commune Casablanca",
                tribunal: "Tech ",
                typeAffaire: "Administratif",
                demandresse: "Partie  ",
                dateDebut: "01-01-2020",
            },
            {
                num: "2",
                nom: "nom affaire 2",
                defendresse: "CM ",
                tribunal: "Tribunal ",
                typeAffaire: "Indemnisation",
                demandresse: "Partie",
                dateDebut: "01-01-2020",
            },
            {
                num: "3",
                nom: "nom affaire 3",
                defendresse: "Tech ",
                tribunal: "Tech ",
                typeAffaire: "Annulation",
                demandresse: "Partie",
                dateDebut: "01-01-2020",
            },
        ];
    }
    ListCotationComponent.prototype.ngOnInit = function () {
        this.columns = [
            "num",
            "nom",
            "defendresse",
            "tribunal",
            "typeAffaire",
            "demandresse",
            "dateDebut",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    // ============================================
    // Filter de recherche
    // ============================================
    ListCotationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    // ============================================
    // Methode d'insertion des associations
    // ============================================
    ListCotationComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/audiences/edit-cotation"]);
    };
    ListCotationComponent.prototype.add = function () {
        this.router.navigate(["pages/audiences/cotation"]);
    };
    ListCotationComponent.prototype.consulterDetail = function () {
        this.router.navigate(["pages/affaires/show-affaire"]);
    };
    ListCotationComponent.prototype.deleteAssociation = function (id) {
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
    // ============================================
    // Export data as excel
    // ============================================
    ListCotationComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile("Liste audiences", "", this.columns, this.data, this.footerData, "Liste-audiences", this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    ListCotationComponent.prototype.createDataJson = function (i) {
        return {
            num: this.assoc[i].num,
            nom: this.assoc[i].nom,
            defendresse: this.assoc[i].defendresse,
            tribunal: this.assoc[i].tribunal,
            typeAffaire: this.assoc[i].typeAffaire,
            demandresse: this.assoc[i].demandresse,
            dateDebut: this.datePipe.transform(this.assoc[i].dateDebut, "dd-MM-yyyy"),
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListCotationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListCotationComponent.prototype, "sort", void 0);
    ListCotationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-cotation",
            templateUrl: "./list-cotation.component.html",
            styleUrls: ["./list-cotation.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListCotationComponent);
    return ListCotationComponent;
}());
export { ListCotationComponent };
//# sourceMappingURL=list-cotation.component.js.map