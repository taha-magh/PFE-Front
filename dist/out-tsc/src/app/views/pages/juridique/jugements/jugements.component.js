import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var JugementsComponent = /** @class */ (function () {
    function JugementsComponent(translate, router, datePipe, excelService) {
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
            "CategorieProduit",
            "Date",
            "Description",
            "Statuts",
            "Remarque",
            "Piece",
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
                "CategorieProduit": "Categorie 1",
                "Date": "2015-01-02",
                "Description": "Description 1",
                "Statuts": "Statuts 1",
                "Remarque": "Remarque 1",
                "Piece": "Pieces 1",
            },
            {
                "Id": "01/02",
                "CategorieProduit": "Categorie 2",
                "Date": "2021-09-30",
                "Description": "Description 2",
                "Statuts": "Statuts 2",
                "Remarque": "Remarque 2",
                "Piece": "Pieces 2",
            },
            {
                "Id": "01/03",
                "CategorieProduit": "Categorie 3",
                "Date": "2019-04-03",
                "Description": "Description 3",
                "Statuts": "Statuts 3",
                "Remarque": "Remarque 3",
                "Piece": "Pieces 3",
            },
            {
                "Id": "01/04",
                "CategorieProduit": "Categorie 4",
                "Date": "2020-01-05",
                "Description": "Description  4",
                "Statuts": "Statuts 4",
                "Remarque": "Remarque 4",
                "Piece": "Pieces 4",
            }
        ];
    }
    JugementsComponent.prototype.addAssociation = function () {
        // juradiction
        this.router.navigate(["pages/juridique/add-jugements"]);
    };
    JugementsComponent.prototype.ModifierAssociation1 = function () {
        // juradiction
        this.router.navigate(["pages/juridique/upd-jugements"]);
    };
    JugementsComponent.prototype.DetailAssociation1 = function () {
        // juradiction
        this.router.navigate(["pages/juridique/detaille-jugements"]);
    };
    JugementsComponent.prototype.deleteAssociation = function (id) {
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
    JugementsComponent.prototype.ngOnInit = function () {
        this.columns = ["Id",
            "CategorieProduit",
            "Date",
            "Description",
            "Statuts",
            "DateDebut",
            "Piece"
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    JugementsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    JugementsComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeJuridiction[i].Id,
            CategorieProduit: this.TypeJuridiction[i].CategorieProduit,
            Date: this.TypeJuridiction[i].Date,
            Description: this.TypeJuridiction[i].Description,
            Statuts: this.TypeJuridiction[i].Statuts,
            Remarque: this.TypeJuridiction[i].Remarque,
            Piece: this.TypeJuridiction[i].Piece,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], JugementsComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], JugementsComponent.prototype, "sort", void 0);
    JugementsComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-jugements',
            templateUrl: './jugements.component.html',
            styleUrls: ['./jugements.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], JugementsComponent);
    return JugementsComponent;
}());
export { JugementsComponent };
//# sourceMappingURL=jugements.component.js.map