import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { DelegataireService } from '../service/delegataire/delegataire.service';
var DelegatairesComponent = /** @class */ (function () {
    function DelegatairesComponent(translate, router, datePipe, excelService, delegataireService, delegatairesService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.delegataireService = delegataireService;
        this.delegatairesService = delegatairesService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            'Id',
            'raisonSocial',
            'RC',
            'IF',
            'ICE',
            'numCNSS',
            'adresse',
            'tel',
            'fax',
            'email',
            'gerant',
            'structure',
            'capital',
            'actions',
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
    }
    DelegatairesComponent.prototype.getAllDelegataire = function () {
        var _this = this;
        debugger;
        this.delegatairesService.getAllDelegataire({ size: 1000 }).subscribe(function (res) {
            debugger;
            console.log(res.body);
            _this.delegatairess = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            debugger;
            console.log(error);
        });
    };
    DelegatairesComponent.prototype.ngOnInit = function () {
        console.log('ttttttttttttttttttttt', this.getAllDelegataire());
        this.columns = [
            'Id',
            'raisonSocial',
            'RC',
            'IF',
            'ICE',
            'numCNSS',
            'adresse',
            'tel',
            'fax',
            'email',
            'gerant',
            'structure',
            'capital',
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.getAllDelegataire();
    };
    DelegatairesComponent.prototype.addDelegataire = function () {
        this.router.navigate(['pages/delegataire/add-delegataire']);
    };
    DelegatairesComponent.prototype.updateDelegataire = function (id) {
        this.router.navigate(['pages/delegataire/upd-delegataire' + id]);
    };
    DelegatairesComponent.prototype.detailDelegataire = function (id) {
        this.router.navigate(['pages/delegataire/detail-delegataire' + id]);
    };
    DelegatairesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DelegatairesComponent.prototype.deleteDelegataire = function (id) {
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
                _this.delegataireService.deleteDelegataire(id).subscribe(function (res) {
                    console.log("res ==> ", res.body);
                    location.reload();
                    // a revoire !!!!!!!!!!!
                }, function (error) {
                    console.log("error ===============================================> ", error);
                });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
            else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_ANNULER"),
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        });
    };
    DelegatairesComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            raisonSocial: this.TypeAlert[i].raisonSocial,
            RC: this.TypeAlert[i].RC,
            IF: this.TypeAlert[i].IF,
            ICE: this.TypeAlert[i].ICE,
            numCNSS: this.TypeAlert[i].numCNSS,
            adresse: this.TypeAlert[i].adresse,
            tel: this.TypeAlert[i].tel,
            fax: this.TypeAlert[i].fax,
            email: this.TypeAlert[i].email,
            gerant: this.TypeAlert[i].gerant,
            structure: this.TypeAlert[i].structure,
            capital: this.TypeAlert[i].capital,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], DelegatairesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], DelegatairesComponent.prototype, "sort", void 0);
    DelegatairesComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-delegataires',
            templateUrl: './delegataires.component.html',
            styleUrls: ['./delegataires.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            DelegataireService,
            DelegataireService])
    ], DelegatairesComponent);
    return DelegatairesComponent;
}());
export { DelegatairesComponent };
//# sourceMappingURL=delegataires.component.js.map