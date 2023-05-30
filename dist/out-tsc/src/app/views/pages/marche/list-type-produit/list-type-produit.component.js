import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListTypeProduitComponent = /** @class */ (function () {
    function ListTypeProduitComponent(translate, router, datePipe, excelService) {
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
            "Id",
            "Categorie",
            "Type",
            "SousType",
            "Libelle",
            "Description",
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
                "Id": "01/01",
                "Categorie": "Categorie Produit 1",
                "Type": "Type de Produit 1",
                "SousType": "SousType de produit 1",
                "Libelle": "Type Fichier 1 ",
                "Description": "Description Fichier 1"
            },
            {
                "Id": "01/02",
                "Categorie": "Categorie Produit 2",
                "Type": "Type de Produit 2",
                "SousType": "SousType de produit 2",
                "Libelle": "Type Fichier 2 ",
                "Description": "Description Fichier 2"
            },
            {
                "Id": "01/03",
                "Categorie": "Categorie Produit 3",
                "Type": "Type de Produit 3",
                "SousType": "SousType de produit 3",
                "Libelle": "Type Fichier 3 ",
                "Description": "Description Fichier 3"
            },
            {
                "Id": "01/04",
                "Categorie": "Categorie Produit 4",
                "Type": "Type de Produit 4",
                "SousType": "SousType de produit 4",
                "Libelle": "Type Fichier 4 ",
                "Description": "Description Fichier 4"
            }
        ];
    }
    ListTypeProduitComponent.prototype.ngOnInit = function () {
        this.columns = ["Id",
            "Categorie",
            "Type",
            "SousType",
            "Libelle",
            "Description"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListTypeProduitComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeProduitComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/Marche/add-type-produit"]);
    };
    ListTypeProduitComponent.prototype.DetailAssociation = function () {
        this.router.navigate(["pages/Marche/detail-type-produit"]);
    };
    ListTypeProduitComponent.prototype.ModifierAssociation = function () {
        this.router.navigate(["pages/Marche/modification-type-produit"]);
    };
    ListTypeProduitComponent.prototype.deleteAssociation = function (id) {
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
    ListTypeProduitComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Categorie: this.TypeAlert[i].Categorie,
            Type: this.TypeAlert[i].Type,
            SousType: this.TypeAlert[i].SousType,
            Libelle: this.TypeAlert[i].Libelle,
            Description: this.TypeAlert[i].Description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeProduitComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeProduitComponent.prototype, "sort", void 0);
    ListTypeProduitComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-type-Produit',
            templateUrl: './list-type-Produit.component.html',
            styleUrls: ['./list-type-Produit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListTypeProduitComponent);
    return ListTypeProduitComponent;
}());
export { ListTypeProduitComponent };
//# sourceMappingURL=list-type-produit.component.js.map