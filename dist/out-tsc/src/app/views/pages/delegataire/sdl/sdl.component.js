import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { SdlService } from '../service/sdl/sdl.service';
var SdlComponent = /** @class */ (function () {
    function SdlComponent(translate, router, datePipe, excelService, sdlService, sdlsService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.sdlService = sdlService;
        this.sdlsService = sdlsService;
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
        this.data = [
            {
                Id: '01',
                raisonSocial: 'Raison 1',
                RC: 'Rc 1',
                IF: 'If 1',
                ICE: 'Ice 1',
                numCNSS: 'Num 1',
                adresse: 'Adresse 1',
                tel: '06+++++++',
                fax: '05+++++++',
                email: '******@gmail.com',
                gerant: 'Gerant 1 ',
                structure: 'Structure 1',
                capital: 'Capital 1',
            },
            {
                Id: '02',
                raisonSocial: 'Raison 2',
                RC: 'Rc 2',
                IF: 'If 2',
                ICE: 'Ice 2',
                numCNSS: 'Num 2',
                adresse: 'Adresse 2',
                tel: '06+++++++',
                fax: '05+++++++',
                email: '******@gmail.com',
                gerant: 'Gerant 2 ',
                structure: 'Structure 2',
                capital: 'Capital 2',
            },
            {
                Id: '03',
                raisonSocial: 'Raison 3',
                RC: 'Rc 3',
                IF: 'If 3',
                ICE: 'Ice 3',
                numCNSS: 'Num 3',
                adresse: 'Adresse 3',
                tel: '06+++++++',
                fax: '05+++++++',
                email: '******@gmail.com',
                gerant: 'Gerant 3 ',
                structure: 'Structure 3',
                capital: 'Capital 3',
            },
            {
                Id: '04',
                raisonSocial: 'Raison 4',
                RC: 'Rc 4',
                IF: 'If 4',
                ICE: 'Ice 4',
                numCNSS: 'Num 4',
                adresse: 'Adresse 4',
                tel: '06+++++++',
                fax: '05+++++++',
                email: '******@gmail.com',
                gerant: 'Gerant 4 ',
                structure: 'Structure 4',
                capital: 'Capital 4',
            },
            {
                Id: '05',
                raisonSocial: 'Raison 5',
                RC: 'Rc 5',
                IF: 'If 5',
                ICE: 'Ice 5',
                numCNSS: 'Num 5',
                adresse: 'Adresse 5',
                tel: '06+++++++',
                fax: '05+++++++',
                email: '******@gmail.com',
                gerant: 'Gerant 5 ',
                structure: 'Structure 5',
                capital: 'Capital 5',
            },
        ];
    }
    SdlComponent.prototype.getAllSdl = function () {
        var _this = this;
        this.sdlsService.getAllSdl({ size: 1000 }).subscribe(function (res) {
            console.log(res.body);
            _this.sdls = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    SdlComponent.prototype.ngOnInit = function () {
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
        this.getAllSdl();
    };
    SdlComponent.prototype.addSdl = function () {
        this.router.navigate(['pages/delegataire/add-sdl']);
    };
    SdlComponent.prototype.updateSdl = function (id) {
        this.router.navigate(['pages/delegataire/upd-sdl']);
    };
    SdlComponent.prototype.detailSdl = function (id) {
        this.router.navigate(['pages/delegataire/detail-sdl']);
    };
    SdlComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SdlComponent.prototype.deleteSdl = function (id) {
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
                _this.sdlService.deleteSdl(id).subscribe(function (res) {
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
    SdlComponent.prototype.createDataJson = function (i) {
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
    ], SdlComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], SdlComponent.prototype, "sort", void 0);
    SdlComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-sdl',
            templateUrl: './sdl.component.html',
            styleUrls: ['./sdl.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            SdlService,
            SdlService])
    ], SdlComponent);
    return SdlComponent;
}());
export { SdlComponent };
//# sourceMappingURL=sdl.component.js.map