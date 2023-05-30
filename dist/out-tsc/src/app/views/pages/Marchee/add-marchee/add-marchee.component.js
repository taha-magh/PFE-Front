import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var AddMarcheeComponent = /** @class */ (function () {
    function AddMarcheeComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.isVisible = 0;
        this.Presentation = 0;
        this.Visible = 0;
        this.Type = 0;
        this.isSelected = false;
        this.data = [];
        this.footerData = [];
        this.displayedColumns = [
            "Id",
            "Type",
            "Piece",
            "actions",
        ];
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                "Id": "1",
                "Type": "Type 1",
                "Piece": "Piece 21",
            },
            {
                "Id": "2",
                "Type": "Type 2",
                "Piece": "Piece 2",
            },
        ];
    }
    AddMarcheeComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Type",
            "Piece",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    AddMarcheeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AddMarcheeComponent.prototype.deleteAssociation = function (id) {
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
    AddMarcheeComponent.prototype.RetourEmbalages = function () {
        this.router.navigate(["pages/Marchee/list-marche"]);
    };
    AddMarcheeComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Type: this.TypeAlert[i].Type,
            Piece: this.TypeAlert[i].Piece,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], AddMarcheeComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], AddMarcheeComponent.prototype, "sort", void 0);
    AddMarcheeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-add-marchee',
            templateUrl: './add-marchee.component.html',
            styleUrls: ['./add-marchee.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], AddMarcheeComponent);
    return AddMarcheeComponent;
}());
export { AddMarcheeComponent };
//# sourceMappingURL=add-marchee.component.js.map