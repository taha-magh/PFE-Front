import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AssociationService } from '../../utils/association.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { delay, finalize } from 'rxjs/operators';
import { Location } from "@angular/common";
import { FilesUtilsService } from '../../utils/files-utils.service';
import { SpinnerService } from '../../utils/spinner.service';
var ShowMandatComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function ShowMandatComponent(service, router, route, location, translate, fileService, spinnerService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.location = location;
        this.translate = translate;
        this.fileService = fileService;
        this.spinnerService = spinnerService;
        // ============================================
        // Datasource mandat
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "nom",
            "prenom",
            "cin",
            "fonction",
            "adresse",
            "actions",
        ];
        this.isLoadingResults = true;
        // Charger la liste des mandats
        this.getMembresMandats();
    }
    // =====================================
    // Afficher les details mandatBureau
    // =====================================
    ShowMandatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var spinnerRef = this.spinnerService.start(this.translate.instant("PAGES.GENERAL.LOADING")); // start spinner
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/mandatBureau/show/", this.id)
            .pipe(finalize(function () {
            _this.spinnerService.stop(spinnerRef); // stop spinner
        }))
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            console.log(error);
        });
    };
    // =====================================
    // back to list
    // =====================================
    ShowMandatComponent.prototype.back = function () {
        this.location.back();
        //this.router.navigate(["/associations/list-association"]);
    };
    // ============================================
    //
    // ============================================
    ShowMandatComponent.prototype.getMembresMandats = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.service
            .getObjectById("/membreBureau/mandat/", this.id)
            .pipe(delay(300))
            .subscribe(function (data) {
            _this.dataSource = new MatTableDataSource(data);
            _this.isLoading = false;
            /*
            this.paginator._intl.itemsPerPageLabel = this.translate.instant("PAGES.GENERAL.ITEMS_PER_PAGE_LABEL");
            this.paginator._intl.nextPageLabel = this.translate.instant("PAGES.GENERAL.NEXT_PAGE_LABEL");
            this.paginator._intl.previousPageLabel = this.translate.instant("PAGES.GENERAL.PREVIOUS_PAGE_LABEL");
            this.paginator._intl.lastPageLabel = this.translate.instant("PAGES.GENERAL.LAST_PAGE_LABEL");
            this.paginator._intl.firstPageLabel = this.translate.instant("PAGES.GENERAL.FIRST_PAGE_LABEL");
            */
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    // ============================================
    // Filter de recherche
    // ============================================
    ShowMandatComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Ajout membre
    // ============================================
    ShowMandatComponent.prototype.addMembre = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/add-membre/" + this.id]);
    };
    // ============================================
    // Methode de modification des mandats
    // ============================================
    ShowMandatComponent.prototype.editMandat = function () {
        this.id = this.route.snapshot.params["id"];
        this.router.navigate(["associations/edit-mandat/" + this.id]);
    };
    // ============================================
    // Methode de suppression des membres
    // ============================================
    ShowMandatComponent.prototype.deleteMembre = function (id) {
        var _this = this;
        if (confirm(this.translate.instant("PAGES.GENERAL.MSG_DELETED"))) {
            this.service
                .deleteObject("/membreBureau/delete/", id)
                .subscribe(function (data) {
                console.log("getId :" + id);
                _this.getMembresMandats();
            });
        }
    };
    // ============================================
    // Export data as excel
    // ============================================
    ShowMandatComponent.prototype.exportTable = function () {
        this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.MEMBRE_BUREAU.TITRE_INDEX 	"));
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ShowMandatComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ShowMandatComponent.prototype, "sort", void 0);
    ShowMandatComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-mandat',
            templateUrl: './show-mandat.component.html',
            styleUrls: ['./show-mandat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            Location,
            TranslateService,
            FilesUtilsService,
            SpinnerService])
    ], ShowMandatComponent);
    return ShowMandatComponent;
}());
export { ShowMandatComponent };
//# sourceMappingURL=show-mandat.component.js.map