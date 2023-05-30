import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListAudiencesComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ListAudiencesComponent(translate, router, datePipe, excelService) {
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
        this.data = [{
                "num": "1",
                "nom": "nom affaire 1 ",
                "defendresse": "Commune Casablanca",
                "tribunal": "Tech ",
                "typeAffaire": "Administratif",
                "demandresse": "Partie  ",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "2",
                "nom": "nom affaire 2",
                "defendresse": "CM ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Indemnisation",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "3",
                "nom": "nom affaire 3",
                "defendresse": "Tech ",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "4",
                "nom": "nom affaire 4",
                "defendresse": "Tech ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Annulation",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "5",
                "nom": "nom affaire 5",
                "defendresse": "Tech ",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "demandresse": "CM",
                "dateDebut": "01-01-2020"
            }
        ];
    }
    ListAudiencesComponent.prototype.ngOnInit = function () {
        this.columns = ["num",
            "nom",
            "defendresse",
            "tribunal",
            "typeAffaire",
            "demandresse",
            "dateDebut"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    // ============================================
    // Filter de recherche
    // ============================================
    ListAudiencesComponent.prototype.applyFilter = function (filterValue) {
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
    ListAudiencesComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/audiences/edit-chevillard"]);
    };
    ListAudiencesComponent.prototype.add = function () {
        this.router.navigate(["pages/audiences/add-type-chevillard"]);
    };
    ListAudiencesComponent.prototype.consulterDetail = function () {
        this.router.navigate(["pages/affaires/show-affaire"]);
    };
    ListAudiencesComponent.prototype.deleteAssociation = function (id) {
        var _this = this;
        Swal.fire({
            title: 'Voulez vous supprimer cet enregistrement ?',
            icon: 'question',
            iconHtml: '?',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non',
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    // ============================================
    // Export data as excel
    // ============================================
    ListAudiencesComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    ListAudiencesComponent.prototype.createDataJson = function (i) {
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
    ], ListAudiencesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListAudiencesComponent.prototype, "sort", void 0);
    ListAudiencesComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-audiences",
            templateUrl: "./list-audiences.component.html",
            styleUrls: ["./list-audiences.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListAudiencesComponent);
    return ListAudiencesComponent;
}());
export { ListAudiencesComponent };
//# sourceMappingURL=list-audiences.component.js.map