import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListEspeceComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ListEspeceComponent(translate, router, datePipe, excelService) {
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
            "defendresse",
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
            },
            {
                "num": "2",
                "nom": "nom affaire 2",
                "defendresse": "CM ",
            },
            {
                "num": "3",
                "nom": "nom affaire 3",
                "defendresse": "Tech ",
            },
            {
                "num": "4",
                "nom": "nom affaire 4",
                "defendresse": "Tech ",
            },
            {
                "num": "5",
                "nom": "nom affaire 5",
                "defendresse": "Tech ",
            }
        ];
    }
    ListEspeceComponent.prototype.ngOnInit = function () {
        this.columns = ["num",
            "nom",
            "defendresse",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    // ============================================
    // Filter de recherche
    // ============================================
    ListEspeceComponent.prototype.applyFilter = function (filterValue) {
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
    ListEspeceComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/audiences/edit-espece"]);
    };
    ListEspeceComponent.prototype.add = function () {
        this.router.navigate(["pages/audiences/add-espece"]);
    };
    ListEspeceComponent.prototype.consulterDetail = function () {
        this.router.navigate(["pages/affaires/show-affaire"]);
    };
    ListEspeceComponent.prototype.deleteAssociation = function (id) {
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
    ListEspeceComponent.prototype.exportTable = function () {
        //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
        this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"));
    };
    ListEspeceComponent.prototype.createDataJson = function (i) {
        return {
            num: this.assoc[i].num,
            nom: this.assoc[i].nom,
            defendresse: this.assoc[i].defendresse,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListEspeceComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListEspeceComponent.prototype, "sort", void 0);
    ListEspeceComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-espece',
            templateUrl: './list-espece.component.html',
            styleUrls: ['./list-espece.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListEspeceComponent);
    return ListEspeceComponent;
}());
export { ListEspeceComponent };
//# sourceMappingURL=list-espece.component.js.map