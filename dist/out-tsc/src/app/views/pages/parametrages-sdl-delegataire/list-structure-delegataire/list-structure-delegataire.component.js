import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { StructureDelegataireService } from '../service/structureDelegataire/structure-delegataire.service';
var ListStructureDelegataireComponent = /** @class */ (function () {
    function ListStructureDelegataireComponent(translate, router, datePipe, excelService, structureDelegataireService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.structureDelegataireService = structureDelegataireService;
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
    ListStructureDelegataireComponent.prototype.getAllStructureDelegataire = function () {
        var _this = this;
        this.structureDelegataireService.getAllStructureDelegataire({ size: 1000 }).subscribe(function (res) {
            console.log(res.body);
            _this.structureDelegatairess = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    ListStructureDelegataireComponent.prototype.ngOnInit = function () {
        this.columns = [
            'Id',
            'libelle',
            'description',
            'actions',
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.getAllStructureDelegataire();
    };
    ListStructureDelegataireComponent.prototype.addStructureDelegataire = function () {
        this.router.navigate(['pages/parametrage/add-structure-delegataire']);
    };
    ListStructureDelegataireComponent.prototype.updateStructureDelegataire = function (id) {
        this.router.navigate(['pages/parametrage/upd-structure-delegataire']);
    };
    ListStructureDelegataireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListStructureDelegataireComponent.prototype.deleteStructureDelegataire = function (id) {
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
                _this.structureDelegataireService.deleteStructureDelegataire(id).subscribe(function (res) {
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
    ListStructureDelegataireComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            libelle: this.TypeAlert[i].libelle,
            description: this.TypeAlert[i].description,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListStructureDelegataireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListStructureDelegataireComponent.prototype, "sort", void 0);
    ListStructureDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-list-structure-delegataire',
            templateUrl: './list-structure-delegataire.component.html',
            styleUrls: ['./list-structure-delegataire.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            StructureDelegataireService])
    ], ListStructureDelegataireComponent);
    return ListStructureDelegataireComponent;
}());
export { ListStructureDelegataireComponent };
//# sourceMappingURL=list-structure-delegataire.component.js.map