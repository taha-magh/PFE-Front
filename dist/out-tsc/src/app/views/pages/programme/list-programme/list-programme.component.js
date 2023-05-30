import * as tslib_1 from "tslib";
import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
var ListProgrammeComponent = /** @class */ (function () {
    function ListProgrammeComponent(translate, router, datePipe, excelService) {
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
            "Annee",
            "Porten",
            "Cant",
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
                "Nom": "Programme 1",
                "Annee": "2022/02/02",
                "Porten": "Porteur 1",
                "Cant": "TCant 1 ",
            },
            {
                "Id": "02",
                "Nom": "Programme 2",
                "Annee": "2018/05/04",
                "Porten": "Porteur 2",
                "Cant": "Cant 2 ",
            },
            {
                "Id": "03",
                "Nom": "Programme 3",
                "Annee": "2020/02/11",
                "Porten": "Porteur 3",
                "Cant": "Cant 3 ",
            },
        ];
    }
    ListProgrammeComponent.prototype.ngOnInit = function () {
        this.columns = [
            "Id",
            "Nom",
            "Annee",
            "Porten",
            "Cant",
        ];
        this.dataSource = new MatTableDataSource(this.data);
    };
    ListProgrammeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListProgrammeComponent.prototype.addAssociation = function () {
        this.router.navigate(["pages/Programme/add-programme"]);
    };
    ListProgrammeComponent.prototype.DetailAssociation = function () {
        this.router.navigate(["pages/Programme/detaille-programme"]);
    };
    ListProgrammeComponent.prototype.ModifierAssociation = function () {
        this.router.navigate(["pages/Programme/updt-programme"]);
    };
    ListProgrammeComponent.prototype.deleteAssociation = function (id) {
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
    ListProgrammeComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            Nom: this.TypeAlert[i].Nom,
            Annee: this.TypeAlert[i].Annee,
            Porten: this.TypeAlert[i].Parten,
            Cant: this.TypeAlert[i].Cant,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListProgrammeComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListProgrammeComponent.prototype, "sort", void 0);
    ListProgrammeComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-programme',
            templateUrl: './list-programme.component.html',
            styleUrls: ['./list-programme.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListProgrammeComponent);
    return ListProgrammeComponent;
}());
export { ListProgrammeComponent };
//# sourceMappingURL=list-programme.component.js.map