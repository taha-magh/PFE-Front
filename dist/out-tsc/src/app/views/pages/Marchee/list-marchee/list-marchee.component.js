import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListMarcheeComponent = /** @class */ (function () {
    function ListMarcheeComponent(translate, router, datePipe, excelService) {
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
            "Organiseme",
            "Budget",
            "Object",
            "Nature",
            "Prix",
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
                "Id": "31",
                "Organiseme": "Organism 2",
                "Budget": "Budget Estimitif 1",
                "Object": "Object 3",
                "Nature": "Natur AO 1",
                "Prix": "Natur Prix 1",
            },
            {
                "Id": "-",
                "Organiseme": "Organism 2",
                "Budget": "Budget Estimitif 5",
                "Object": "Object 5",
                "Nature": "Natur AO 2",
                "Prix": "Natur Prix 4",
            },
            {
                "Id": "42",
                "Organiseme": "Organism 3",
                "Budget": "Budget Estimitif 2",
                "Object": "Object 3",
                "Nature": "Natur AO 4",
                "Prix": "Natur Prix 5",
            },
            {
                "Id": "-",
                "Organiseme": "Organism 4",
                "Budget": "Budget Estimitif 4",
                "Object": "Object 3",
                "Nature": "Natur AO 2",
                "Prix": "Natur Prix 5",
            }
        ];
    }
    ListMarcheeComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Organiseme",
            "Budget",
            "Object",
            "Nature",
            "Prix",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListMarcheeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListMarcheeComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/Marchee/add-marche"]);
    };
    ListMarcheeComponent.prototype.DetailAssociation = function () {
        this.router.navigate(["pages/Marchee/detail-marche"]);
    };
    ListMarcheeComponent.prototype.ModifierAssociation = function () {
        this.router.navigate(["pages/Marchee/upd-marche"]);
    };
    ListMarcheeComponent.prototype.deleteAssociation = function (id) {
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
    ListMarcheeComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Organiseme: this.TypeAlert[i].Organiseme,
            Budget: this.TypeAlert[i].Budget,
            Object: this.TypeAlert[i].Object,
            Nature: this.TypeAlert[i].Nature,
            Prix: this.TypeAlert[i].Prix,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListMarcheeComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListMarcheeComponent.prototype, "sort", void 0);
    ListMarcheeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-marchee',
            templateUrl: './list-marchee.component.html',
            styleUrls: ['./list-marchee.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListMarcheeComponent);
    return ListMarcheeComponent;
}());
export { ListMarcheeComponent };
//# sourceMappingURL=list-marchee.component.js.map