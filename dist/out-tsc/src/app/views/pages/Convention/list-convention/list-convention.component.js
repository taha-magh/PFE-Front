import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListConventionComponent = /** @class */ (function () {
    function ListConventionComponent(translate, router, datePipe, excelService) {
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
            "Nom",
            "Date",
            "Duree",
            "Mantant",
            "Partie",
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
                "Id": "01",
                "Nom": "Convention 1",
                "Date": "2022/02/02",
                "Duree": "Duree 1",
                "Mantant": "Mantant 1 ",
                "Partie": "Partie 1",
            },
            {
                "Id": "02",
                "Nom": "Convention 2",
                "Date": "2018/05/04",
                "Duree": "Duree 1",
                "Mantant": "Mantant 2 ",
                "Partie": "",
            },
            {
                "Id": "03",
                "Nom": "Convention 3",
                "Date": "2020/02/11",
                "Duree": "Duree 1",
                "Mantant": "Mantant 3 ",
                "Partie": "Partie 3",
            },
            {
                "Id": "04",
                "Nom": "Convention 4 ",
                "Date": "2022/10/02",
                "Duree": "Duree 1",
                "Mantant": "Mantant 4",
                "Partie": "",
            }
        ];
    }
    ListConventionComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Convention/list-convention"]);
    };
    ListConventionComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Nom",
            "Date",
            "Duree",
            "Mantant",
            "Partie",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListConventionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListConventionComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/Convention/add-convention"]);
    };
    ListConventionComponent.prototype.DetailAssociation = function () {
        this.router.navigate(["pages/Convention/detaille-convention"]);
    };
    ListConventionComponent.prototype.ModifierAssociation = function () {
        this.router.navigate(["pages/Convention/updt-convention"]);
    };
    ListConventionComponent.prototype.deleteAssociation = function (id) {
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
    ListConventionComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Nom: this.TypeAlert[i].Nom,
            Date: this.TypeAlert[i].Date,
            Duree: this.TypeAlert[i].Duree,
            Mantant: this.TypeAlert[i].Mantant,
            Partie: this.TypeAlert[i].Partie,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListConventionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListConventionComponent.prototype, "sort", void 0);
    ListConventionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-convention',
            templateUrl: './list-convention.component.html',
            styleUrls: ['./list-convention.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListConventionComponent);
    return ListConventionComponent;
}());
export { ListConventionComponent };
//# sourceMappingURL=list-convention.component.js.map