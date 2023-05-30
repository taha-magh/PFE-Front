import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var EditFactureComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function EditFactureComponent(translate, router, datePipe, excelService) {
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
            "typeAffaire",
            "dateDebut",
            "tribunal",
            "defendresse",
            "demandresse",
            "poids",
            "Description",
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
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "",
                "poids": "",
                "defendresse": "",
                "retrait": "",
                "Description": "",
            },
            {
                "num": "2",
                "nom": "nom affaire 2",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tribunal ",
                "typeAffaire": "Indemnisation",
                "poids": "",
                "defendresse": "",
                "retrait": "",
                "Description": "",
            },
            {
                "num": "3",
                "nom": "nom affaire 3",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "poids": "",
                "defendresse": "",
                "retrait": "",
                "Description": "",
            },
            {
                "num": "4",
                "nom": "nom affaire 4",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tribunal ",
                "typeAffaire": "Annulation",
                "poids": "",
                "defendresse": "",
                "retrait": "",
                "Description": "",
            },
            {
                "num": "5",
                "nom": "nom affaire 5",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
                "poids": "",
                "defendresse": "",
                "retrait": "",
                "Description": "",
            }
        ];
    }
    EditFactureComponent.prototype.ngOnInit = function () {
        this.columns = ["num",
            "nom",
            "tribunal",
            "typeAffaire",
            "dateDebut",
            "demandresse",
            "defendresse",
            "tribunal",
            "typeAffaire",
            "poids",
            "retrait",
            "Description",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    // ============================================
    // Filter de recherche
    // ============================================
    EditFactureComponent.prototype.applyFilter = function (filterValue) {
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
    EditFactureComponent.prototype.add = function () {
        this.router.navigate(["pages/audiences/imprimer-facture"]);
    };
    EditFactureComponent.prototype.back = function () {
        this.router.navigate(["pages/audiences/list-facture"]);
    };
    EditFactureComponent.prototype.deleteAssociation = function (id) {
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
    EditFactureComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    EditFactureComponent.prototype.createDataJson = function (i) {
        return {
            num: this.assoc[i].num,
            nom: this.assoc[i].nom,
            dateDebut: this.assoc[i].dateDebut,
            demandresse: this.assoc[i].demandresse,
            tribunal: this.assoc[i].tribunal,
            typeAffaire: this.assoc[i].typeAffaire,
            poids: this.assoc[i].poids,
            defendresse: this.assoc[i].defenderesse,
            retrait: this.assoc[i].retrait,
            Description: this.assoc[i].Description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], EditFactureComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], EditFactureComponent.prototype, "sort", void 0);
    EditFactureComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-edit-facture',
            templateUrl: './edit-facture.component.html',
            styleUrls: ['./edit-facture.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], EditFactureComponent);
    return EditFactureComponent;
}());
export { EditFactureComponent };
//# sourceMappingURL=edit-facture.component.js.map