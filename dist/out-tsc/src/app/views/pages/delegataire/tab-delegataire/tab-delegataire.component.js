import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ExcelAssociationService } from '../../utils/excel-association.service';
import Swal from 'sweetalert2';
import { TabDelegataireService } from '../service/tab-delegataire/tab-delegataire.service';
var TabDelegataireComponent = /** @class */ (function () {
    function TabDelegataireComponent(translate, router, datePipe, excelService, suiviDelegataireService, suiviDelegatairesService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.suiviDelegataireService = suiviDelegataireService;
        this.suiviDelegatairesService = suiviDelegatairesService;
        this.data = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "Id",
            "typeIndicateur",
            "nom",
            "desciption",
            "dateValeur",
            "valeurContractuel",
            "valeurConstate",
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
                Id: "01",
                typeIndicateur: "Sample text",
                nom: "Sample text",
                desciption: "Sample text",
                dateValeur: "Sample text",
                valeurContractuel: "Sample text",
                valeurConstate: "Sample text",
            },
            {
                Id: "02",
                typeIndicateur: "Sample text",
                nom: "Sample text",
                desciption: "Sample text",
                dateValeur: "Sample text",
                valeurContractuel: "Sample text",
                valeurConstate: "Sample text",
            },
            {
                Id: "03",
                typeIndicateur: "Sample text",
                nom: "Sample text",
                desciption: "Sample text",
                dateValeur: "Sample text",
                valeurContractuel: "Sample text",
                valeurConstate: "Sample text",
            },
        ];
    }
    TabDelegataireComponent.prototype.getAllSuiviDelegataire = function () {
        var _this = this;
        this.suiviDelegatairesService.getAllSuiviDelegataire({ size: 1000 }).subscribe(function (res) {
            console.log(res.body);
            _this.suiviDelegataires = res.body;
            _this.dataSource.data = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    TabDelegataireComponent.prototype.ngOnInit = function () {
        this.columns = ["Id", "typeIndicateur", "nom", "desciption", "dateValeur", "valeurContractuel", "valeurConstate"];
        this.dataSource = new MatTableDataSource(this.data);
        this.getAllSuiviDelegataire();
    };
    TabDelegataireComponent.prototype.addSuiviDelegataire = function () {
        this.router.navigate(['pages/delegataire/add-tab-delegataire']);
    };
    TabDelegataireComponent.prototype.updateSuiviDelegataire = function (id) {
        this.router.navigate(['pages/delegataire/upd-tab-delegataire']);
    };
    TabDelegataireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TabDelegataireComponent.prototype.deleteSuiviDelegataire = function (id) {
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
                _this.suiviDelegataireService.deleteSuiviDelegataire(id).subscribe(function (res) {
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
    TabDelegataireComponent.prototype.createDataJson = function (i) {
        return {
            Id: this.TypeAlert[i].Id,
            typeIndicateur: this.TypeAlert[i].typeIndicateur,
            nom: this.TypeAlert[i].nom,
            desciption: this.TypeAlert[i].desciption,
            dateValeur: this.TypeAlert[i].dateValeur,
            valeurContractuel: this.TypeAlert[i].valeurContractuel,
            valeurConstate: this.TypeAlert[i].valeurConstate,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabDelegataireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabDelegataireComponent.prototype, "sort", void 0);
    TabDelegataireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-tab-delegataire',
            templateUrl: './tab-delegataire.component.html',
            styleUrls: ['./tab-delegataire.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService,
            TabDelegataireService,
            TabDelegataireService])
    ], TabDelegataireComponent);
    return TabDelegataireComponent;
}());
export { TabDelegataireComponent };
//# sourceMappingURL=tab-delegataire.component.js.map