import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListInfoComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ListInfoComponent(translate, router, datePipe, excelService) {
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
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "",
            },
            {
                "num": "2",
                "nom": "nom affaire 2",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tribunal ",
                "typeAffaire": "Indemnisation",
            },
            {
                "num": "3",
                "nom": "nom affaire 3",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
            },
            {
                "num": "4",
                "nom": "nom affaire 4",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tribunal ",
                "typeAffaire": "Annulation",
            },
            {
                "num": "5",
                "nom": "nom affaire 5",
                "dateDebut": "3/5/22",
                "demandresse": "",
                "tribunal": "Tech ",
                "typeAffaire": "Annulation",
            }
        ];
    }
    ListInfoComponent.prototype.ngOnInit = function () {
        this.columns = ["num",
            "nom",
            "tribunal",
            "typeAffaire",
            "dateDebut",
            "demandresse",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListInfoComponent.prototype.consulterDetail = function () {
        this.router.navigate(["pages/audiences/detail-infos"]);
    };
    // ============================================
    // Filter de recherche
    // ============================================
    ListInfoComponent.prototype.applyFilter = function (filterValue) {
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
    ListInfoComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/audiences/edit-info"]);
    };
    ListInfoComponent.prototype.add = function () {
        this.router.navigate(["pages/audiences/saisir-info"]);
    };
    ListInfoComponent.prototype.deleteAssociation = function (id) {
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
    ListInfoComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    ListInfoComponent.prototype.createDataJson = function (i) {
        return {
            num: this.assoc[i].num,
            nom: this.assoc[i].nom,
            dateDebut: this.assoc[i].dateDebut,
            demandresse: this.assoc[i].demandresse,
            tribunal: this.assoc[i].tribunal,
            typeAffaire: this.assoc[i].typeAffaire,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListInfoComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListInfoComponent.prototype, "sort", void 0);
    ListInfoComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-audiences",
            templateUrl: "./list-info.component.html",
            styleUrls: ["./list-info.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListInfoComponent);
    return ListInfoComponent;
}());
export { ListInfoComponent };
//# sourceMappingURL=list-info.component.js.map