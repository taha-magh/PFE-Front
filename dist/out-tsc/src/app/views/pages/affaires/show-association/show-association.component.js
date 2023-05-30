import * as tslib_1 from "tslib";
import { AssociationService } from "../../utils/association.service";
import { Component, ViewChild } from "@angular/core";
import { MatSort, MatPaginator, MatTableDataSource, MatAccordion } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { FilesUtilsService } from '../../utils/files-utils.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { SpinnerService } from '../../utils/spinner.service';
var ShowAssociationComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ShowAssociationComponent(service, router, route, translate, fileService, spinnerService) {
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
        this.asyncTabs = new Observable(function (observer) {
            setTimeout(function () {
                observer.next([
                    {
                        label: "Espace Collaboratif",
                        content: "1",
                    },
                    {
                        label: "Demandes des éléments",
                        content: "2"
                    },
                    {
                        label: "Espace Privé",
                        content: "3",
                    },
                    {
                        label: "Audiences",
                        content: "4"
                    },
                    {
                        label: "Avocats",
                        content: "5"
                    },
                    {
                        label: "Documents",
                        content: "6"
                    }
                    /*,
                    {
                        label: "PAGES.ASSOCIATION.TAB_CONVENTION",
                        content: "6"
                    },
                   {
                        label: "PAGES.ASSOCIATION.TAB_PROJET_PARTENARIAT",
                        content: "7"
                    },
                    {
                        label: "PAGES.ASSOCIATION.TAB_ACTIVITES",
                        content: "7"
                    },
                    {
                        label: "PAGES.ASSOCIATION.TAB_GESTION_LOCAUX",
                        content: "8"
                    },
                    {
                        label: "PAGES.ASSOCIATION.TAB_DOC_ADMINISTRATIF",
                        content: "9"
                    }*/
                ]);
            }, 300);
        });
    }
    // =====================================
    // Afficher les details association
    // =====================================
    ShowAssociationComponent.prototype.ngOnInit = function () {
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
    ShowAssociationComponent.prototype.back = function () {
        //this.location.back();
        this.router.navigate(["/associations/list-association"]);
    };
    // ============================================
    //
    // ============================================
    ShowAssociationComponent.prototype.getMandatBureau = function () {
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
    ShowAssociationComponent.prototype.createMandat = function (i) {
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
    ShowAssociationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Ajouter mandat
    // ============================================
    ShowAssociationComponent.prototype.addMandat = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/add-mandat/" + this.id]);
    };
    // ============================================
    // Methode de suppression des mandats
    // ============================================
    ShowAssociationComponent.prototype.deleteMandat = function (id) {
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
    ShowAssociationComponent.prototype.editAssociation = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/edit-association/" + this.id]);
    };
    // ============================================
    // Export data as excel
    // ============================================
    ShowAssociationComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportDataMandat", this.translate.instant("PAGES.MANDAT.TITRE_INDEX"));
    };
    // ============================================
    // Historique
    // ============================================
    ShowAssociationComponent.prototype.showHitory = function () {
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
    ShowAssociationComponent.prototype.getCreator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.fullName;
        }
        return result;
    };
    // ============================================
    // get Modificator
    // ============================================
    ShowAssociationComponent.prototype.getModificator = function (user) {
        var result = "لا توجد معلومات";
        if (user != null) {
            result = this.details.modificateurUser;
        }
        return result;
    };
    // ============================================
    // Date format
    // ============================================
    ShowAssociationComponent.prototype.getDates = function (date) {
        var result = "لا توجد معلومات";
        if (date != null) {
            result = formatDate(date, 'dd/MM/yyyy HH:mm', 'ar-MA');
        }
        return result;
    };
    // ============================================
    // Show info panel
    // ============================================
    ShowAssociationComponent.prototype.openInfo = function () {
        this.assocInfo = !this.assocInfo;
    };
    tslib_1.__decorate([
        ViewChild(MatAccordion, { static: false }),
        tslib_1.__metadata("design:type", MatAccordion)
    ], ShowAssociationComponent.prototype, "accordion", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ShowAssociationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ShowAssociationComponent.prototype, "sort", void 0);
    ShowAssociationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-show-association",
            templateUrl: "./show-association.component.html",
            styleUrls: ["./show-association.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], ShowAssociationComponent);
    return ShowAssociationComponent;
}());
export { ShowAssociationComponent };
//# sourceMappingURL=show-association.component.js.map