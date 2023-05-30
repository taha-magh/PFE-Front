import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListFactureComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ListFactureComponent(translate, router, datePipe, excelService) {
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
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [{
                "num": "1/2022",
                "nom": "nom affaire 1 ",
                "defendresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "",
                "demandresse": "  ",
                "dateDebut": ""
            },
            {
                "num": "2/2022",
                "nom": "nom affaire 2",
                "defendresse": " ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Indemnisation",
                "demandresse": "",
                "dateDebut": ""
            },
            {
                "num": "3/2022",
                "nom": "nom affaire 3",
                "defendresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "demandresse": "",
                "dateDebut": ""
            },
            {
                "num": "4/2022",
                "nom": "nom affaire 4",
                "defendresse": "Tech ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Annulation",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "5/2022",
                "nom": "nom affaire 5",
                "defendresse": " ",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "demandresse": "",
                "dateDebut": ""
            }
        ];
    }
    ListFactureComponent.prototype.ngOnInit = function () {
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
    ListFactureComponent.prototype.applyFilter = function (filterValue) {
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
    ListFactureComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/audiences/edit-facture"]);
    };
    ListFactureComponent.prototype.add = function () {
    };
    ListFactureComponent.prototype.consulterDetail = function () {
        this.router.navigate(["pages/audiences/add-facture"]);
    };
    ListFactureComponent.prototype.deleteAssociation = function (id) {
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
    ListFactureComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    ListFactureComponent.prototype.createDataJson = function (i) {
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
    ], ListFactureComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListFactureComponent.prototype, "sort", void 0);
    ListFactureComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-audiences",
            templateUrl: "./list-facture.component.html",
            styleUrls: ["./list-facture.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListFactureComponent);
    return ListFactureComponent;
}());
export { ListFactureComponent };
//# sourceMappingURL=list-facture.component.js.map