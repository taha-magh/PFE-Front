import * as tslib_1 from "tslib";
import { AssociationService } from "../../utils/association.service";
import { Component, ViewChild } from "@angular/core";
import { MatSort, MatPaginator, MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { SpinnerService } from '../../utils/spinner.service';
var DetailleConventionComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function DetailleConventionComponent(service, router, route, translate, fileService, spinnerService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.fileService = fileService;
        this.spinnerService = spinnerService;
        // ============================================
        // Datasource mandat
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
        this.history = false;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "dateDebut",
            "dateFin",
            "dureeMandat",
            "president",
            //"vicePresident",
            "nbrMmbr",
            "nbrH",
            "nbrF",
            "actions",
        ];
        // =====================================
        // Declarations
        // =====================================
        this.selected = new FormControl(0);
        this.isLoadingResults = true;
        this.start = true;
        this.assocInfo = false;
        this.nbMembre = 0;
        this.nbrH = 0;
        this.nbrF = 0;
        this.mandatDatasource = [];
        this.mandatList = [];
        this.tab = [];
        this.myData = new BehaviorSubject(0);
        // Charger la liste des mandats
        this.getMandatBureau();
        //this.getConvention();
    }
    // =====================================
    // Afficher les details association
    // =====================================
    DetailleConventionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.details = {
            "num": "1/2022",
            "nom": "nom affaire 1 ",
            "defendresse": "Test",
            "tribunal": "Tech ",
            "typeAffaire": "Administratif",
            "demandresse": "Partie  ",
            "dateDepot": "01-12-2019",
            "dateDebut": "01-01-2020",
            "objet": "Objet d'affaire",
            "ville": "Rabat"
        };
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/affaire/show/", this.id)
            .subscribe(function (data) {
            console.log("12222222222");
            console.log(data);
            _this.details = data;
            _this.dataSource = new MatTableDataSource(data);
        }, function (error) {
            console.log(error);
        });
    };
    // =====================================
    // back to list
    // =====================================
    DetailleConventionComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["pages/Convention/list-convention"]);
    };
    // ============================================
    //
    // ============================================
    DetailleConventionComponent.prototype.getMandatBureau = function () {
        var _this = this;
        var spinnerRef = this.spinnerService.start(this.translate.instant("PAGES.GENERAL.LOADING")); // start spinner
        this.mandatDatasource = [];
        this.mandatList = [];
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/mandatBureau/association/", this.id)
            .pipe(finalize(function () {
            _this.spinnerService.stop(spinnerRef); // stop spinner
        }))
            .subscribe(function (data) {
            _this.isLoading = false;
            _this.mandatdata = data;
            //for (let i = 0; i < this.mandatdata.length; i++) {
            //this.mandatDatasource.push(this.createMandat(i));
            //this.service.getObjectById("/nbrHomme/", this.mandatdata[i][5]);
            // console.log('TAB : ' + JSON.stringify(this.nbrH, null, 2))
            // this.mandatList.push({ id: this.mandatdata[i][5], dateD: this.mandatdata[i][1], dateF: this.mandatdata[i][2], mandat: this.mandatdata[i][3], duree: this.mandatdata[i][4], totalMmbre: this.mandatdata[i][0], totalMmbreH: 0, totalMmbreF: 0 })
            //}
            // console.log('myData : ' + JSON.stringify(this.myData.asObservable(), null, 2))
            console.log('Mandat liste : ' + JSON.stringify(data, null, 2));
            _this.dataSource = new MatTableDataSource(data);
            _this.isLoadingResults = false;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    DetailleConventionComponent.prototype.createMandat = function (i) {
        var th = 2;
        var tf = 1;
        return {
            id: this.mandatdata[i][5],
            dateD: this.mandatdata[i][1],
            dateF: this.mandatdata[i][2],
            mandat: this.mandatdata[i][3],
            duree: this.mandatdata[i][4],
            totalMmbre: this.mandatdata[i][0],
            totalMmbreH: th,
            totalMmbreF: tf,
        };
    };
    // ============================================
    // Filter de recherche
    // ============================================
    DetailleConventionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Ajouter mandat
    // ============================================
    DetailleConventionComponent.prototype.addMandat = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/add-mandat/" + this.id]);
    };
    // ============================================
    // Methode de suppression des mandats
    // ============================================
    DetailleConventionComponent.prototype.deleteMandat = function (id) {
        var _this = this;
        if (confirm(this.translate.instant("PAGES.GENERAL.MSG_DELETED"))) {
            this.service
                .deleteObject("/mandatBureau/delete/", id)
                .subscribe(function (data) {
                console.log("getId :" + id);
                _this.getMandatBureau();
            });
        }
    };
    // ============================================
    // Methode de modification des associations
    // ============================================
    DetailleConventionComponent.prototype.editAssociation = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/edit-association/" + this.id]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    DetailleConventionComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataMandat", this.translate.instant("PAGES.MANDAT.TITRE_INDEX"));
    };
    // ============================================
    // Historique
    // ============================================
    DetailleConventionComponent.prototype.showHitory = function () {
        Swal.fire({
            title: 'معلومات',
            icon: 'info',
            confirmButtonText: 'حسنا',
            html: '<table width="100%" style="direction: rtl;">' +
                '<tbody>' +
                '<tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">أنشأ من طرف :</th>' +
                '<td style="font-size: 15px;" class="donnee_show">' + this.getCreator(this.details.fullName) + '</td>' +
                '</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تاريخ الإنشاء :</th>' +
                '<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getDates(this.details.creationDate) + '</td>' +
                '</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تاريخ التعديل :</th>' +
                '<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getDates(this.details.updateDate) + '</td>' +
                '</tr><tr style="border-bottom: 1px dotted;"><th style="color: #0a447d;">تم التعديل من طرف :</th>' +
                '<td style="font-size: 15px; direction: initial;" class="donnee_show">' + this.getModificator(this.details.modificateurUser) + '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>',
        });
    };
    // ============================================
    // get Creator
    // ============================================
    DetailleConventionComponent.prototype.getCreator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.fullName;
        }
        return result;
    };
    // ============================================
    // get Modificator
    // ============================================
    DetailleConventionComponent.prototype.getModificator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.modificateurUser;
        }
        return result;
    };
    // ============================================
    // Date format
    // ============================================
    DetailleConventionComponent.prototype.getDates = function (date) {
        var result = "لا توجد معلومات";
        if (date != null) {
            result = formatDate(date, 'dd/MM/yyyy HH:mm', 'ar-MA');
        }
        return result;
    };
    // ============================================
    // Show info panel
    // ============================================
    DetailleConventionComponent.prototype.openInfo = function () {
        this.assocInfo = !this.assocInfo;
    };
    tslib_1.__decorate([
        ViewChild(MatAccordion, { static: false }),
        tslib_1.__metadata("design:type", MatAccordion)
    ], DetailleConventionComponent.prototype, "accordion", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], DetailleConventionComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], DetailleConventionComponent.prototype, "sort", void 0);
    DetailleConventionComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-detaille-convention',
            templateUrl: './detaille-convention.component.html',
            styleUrls: ['./detaille-convention.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], DetailleConventionComponent);
    return DetailleConventionComponent;
}());
export { DetailleConventionComponent };
//# sourceMappingURL=detaille-convention.component.js.map