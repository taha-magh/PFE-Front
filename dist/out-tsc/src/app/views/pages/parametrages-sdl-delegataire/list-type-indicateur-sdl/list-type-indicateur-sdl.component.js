import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { TypeIndicSdlService } from '../service/typeIndicSdl/type-indic-sdl.service';
var ListTypeIndicateurSdlComponent = /** @class */ (function () {
    function ListTypeIndicateurSdlComponent(translate, router, datePipe, excelService, typeIndicSdlService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.typeIndicSdlService = typeIndicSdlService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            'Id',
            'libelle',
            'description',
            'actions',
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                Id: '01',
                libelle: 'libelle 1',
                description: 'description 1',
            },
            {
                Id: '02',
                libelle: 'libelle 2',
                description: 'description 2',
            },
            {
                Id: '03',
                libelle: 'libelle 3',
                description: 'description 3',
            },
        ];
    }
    ListTypeIndicateurSdlComponent.prototype.getAllTypeIndicSdl = function () {
        var _this = this;
        this.typeIndicSdlService.getAllTypeIndicSdl({ size: 1000 }).subscribe(function (res) {
            console.log(res.body);
            _this.typeIndicSdlss = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    ListTypeIndicateurSdlComponent.prototype.ngOnInit = function () {
        this.columns = [
            'Id',
            'libelle',
            'description',
            'actions',
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.getAllTypeIndicSdl();
    };
    ListTypeIndicateurSdlComponent.prototype.addTypeIndicSdl = function () {
        this.router.navigate(['pages/parametrage/add-type-indicateur-sdl']);
    };
    ListTypeIndicateurSdlComponent.prototype.updateTypeIndicSdl = function (id) {
        this.router.navigate(['pages/parametrage/upd-type-indicateur-sdl']);
    };
    ListTypeIndicateurSdlComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListTypeIndicateurSdlComponent.prototype.deleteTypeIndicSdl = function (id) {
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
                console.log(' supprimer ');
                _this.typeIndicSdlService.deleteTypeIndicSdl(id).subscribe(function (res) {
                    console.log('res ==> ', res.body);
                    location.reload();
                    // a revoire !!!!!!!!!!!
                }, function (error) {
                    console.log('error ===============================================> ', error);
                });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: _this.translate.instant('PAGES.GENERAL.MSG_DEL_CONFIRMED'),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: _this.translate.instant('PAGES.GENERAL.MSG_DEL_ANNULER'),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        });
    };
    ListTypeIndicateurSdlComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            libelle: this.TypeAlert[i].libelle,
            description: this.TypeAlert[i].description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListTypeIndicateurSdlComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListTypeIndicateurSdlComponent.prototype, "sort", void 0);
    ListTypeIndicateurSdlComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-type-indicateur-sdl",
            templateUrl: "./list-type-indicateur-sdl.component.html",
            styleUrls: ["./list-type-indicateur-sdl.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            TypeIndicSdlService])
    ], ListTypeIndicateurSdlComponent);
    return ListTypeIndicateurSdlComponent;
}());
export { ListTypeIndicateurSdlComponent };
//# sourceMappingURL=list-type-indicateur-sdl.component.js.map