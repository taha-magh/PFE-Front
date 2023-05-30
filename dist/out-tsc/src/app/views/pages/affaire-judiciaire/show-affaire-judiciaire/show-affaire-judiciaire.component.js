import * as tslib_1 from "tslib";
import { AssociationService } from "../../utils/association.service";
import { Component, ViewChild } from "@angular/core";
import { MatSort, MatPaginator, MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { SpinnerService } from '../../utils/spinner.service';
var ShowAffaireJudiciaireComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ShowAffaireJudiciaireComponent(service, router, route, translate, fileService, spinnerService) {
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
        // isLoading = true;
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
        this.selected = new FormControl(0);
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
        this.asyncTabs = new Observable(function (observer) {
            setTimeout(function () {
                observer.next([
                    {
                        label: "Statut",
                        content: "1",
                    },
                    {
                        label: "Avocat",
                        content: "2"
                    },
                    {
                        label: "Jugement",
                        content: "3",
                    },
                    {
                        label: "Evenement",
                        content: "4"
                    },
                ]);
            }, 300);
        });
    }
    // =====================================
    // Afficher les details association
    // =====================================
    ShowAffaireJudiciaireComponent.prototype.ngOnInit = function () {
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
    ShowAffaireJudiciaireComponent.prototype.back = function () {
        this.router.navigate(["pages/affaire-judiciaire/list-affaire-judiciare"]);
    };
    // ============================================
    //
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.getMandatBureau = function () {
        var _this = this;
        this.mandatDatasource = [];
        this.mandatList = [];
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/mandatBureau/association/", this.id)
            .subscribe(function (data) {
            // this.isLoading = false;
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
            // this.isLoadingResults = false;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            // this.isLoading = false;
            console.log(err);
            // this.isLoadingResults = false;
        });
    };
    ShowAffaireJudiciaireComponent.prototype.createMandat = function (i) {
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
    ShowAffaireJudiciaireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Ajouter mandat
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.addMandat = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/add-mandat/" + this.id]);
    };
    // ============================================
    // Methode de suppression des mandats
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.deleteMandat = function (id) {
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
    ShowAffaireJudiciaireComponent.prototype.editAssociation = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["pages/affaire-judiciaire/edit-affaire-judiciare" + this.id]);
    };
    ShowAffaireJudiciaireComponent.prototype.editAffaire = function () {
        this.router.navigate(["pages/affaire-judiciaire/edit-affaire-judiciare"]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataMandat", this.translate.instant("PAGES.MANDAT.TITRE_INDEX"));
    };
    // ============================================
    // Historique
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.showHitory = function () {
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
    ShowAffaireJudiciaireComponent.prototype.getCreator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.fullName;
        }
        return result;
    };
    // ============================================
    // get Modificator
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.getModificator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.modificateurUser;
        }
        return result;
    };
    // ============================================
    // Date format
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.getDates = function (date) {
        var result = "لا توجد معلومات";
        if (date != null) {
            result = formatDate(date, 'dd/MM/yyyy HH:mm', 'ar-MA');
        }
        return result;
    };
    // ============================================
    // Show info panel
    // ============================================
    ShowAffaireJudiciaireComponent.prototype.openInfo = function () {
        this.assocInfo = !this.assocInfo;
    };
    tslib_1.__decorate([
        ViewChild(MatAccordion, { static: false }),
        tslib_1.__metadata("design:type", MatAccordion)
    ], ShowAffaireJudiciaireComponent.prototype, "accordion", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ShowAffaireJudiciaireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ShowAffaireJudiciaireComponent.prototype, "sort", void 0);
    ShowAffaireJudiciaireComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-affaire-judiciaire',
            templateUrl: './show-affaire-judiciaire.component.html',
            styleUrls: ['./show-affaire-judiciaire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], ShowAffaireJudiciaireComponent);
    return ShowAffaireJudiciaireComponent;
}());
export { ShowAffaireJudiciaireComponent };
//# sourceMappingURL=show-affaire-judiciaire.component.js.map