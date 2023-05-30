import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AssociationService } from '../../utils/association.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FilesUtilsService } from '../../utils/files-utils.service';
import { delay } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
var MandatFilterComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function MandatFilterComponent(associationService, service, translate, router, fileService, fb, datePipe) {
        this.associationService = associationService;
        this.service = service;
        this.translate = translate;
        this.router = router;
        this.fileService = fileService;
        this.fb = fb;
        this.datePipe = datePipe;
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "num",
            "nom",
            "nomPresident",
            "fax",
            "dateCreation",
            "email",
            "adresseLocal",
            "typeActiviteAssociation",
            "annexeAdministratif",
            "datePvChangementBureau",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = false;
        this.datasize = 0;
        // this.getAssociation();
    }
    MandatFilterComponent.prototype.ngOnInit = function () {
        this.searchForm = this.fb.group({
            type: ["", Validators.required],
            statut: ["", Validators.required],
        });
        this.getData();
    };
    MandatFilterComponent.prototype.getData = function () {
        var _this_1 = this;
        this.service.getData().subscribe(function (data) {
            _this_1.statuts = data[0];
            _this_1.typeActivites = data[1];
            //this.annexesAdmin = data[3];
            console.log(data[1]);
        }, function (err) {
            console.log(err);
        });
    };
    // ============================================
    // Recuperer tous les association
    // ============================================
    MandatFilterComponent.prototype.getAssociation = function (data) {
        var _this_1 = this;
        this.isLoading = true;
        var _this = this;
        this.associationService
            .getRessource("/association/index")
            .pipe(delay(300))
            .subscribe(function (data) {
            console.log('Liste Ass : ' + JSON.stringify(data, null, 2));
            _this_1.isLoading = false;
            _this.datasize = data.length;
            _this_1.dataSource = new MatTableDataSource(data);
            _this_1.isLoadingResults = false;
            _this_1.paginator._intl.itemsPerPageLabel = _this_1.translate.instant("PAGES.GENERAL.ITEMS_PER_PAGE_LABEL");
            _this_1.paginator._intl.nextPageLabel = _this_1.translate.instant("PAGES.GENERAL.NEXT_PAGE_LABEL");
            _this_1.paginator._intl.previousPageLabel = _this_1.translate.instant("PAGES.GENERAL.PREVIOUS_PAGE_LABEL");
            _this_1.paginator._intl.lastPageLabel = _this_1.translate.instant("PAGES.GENERAL.LAST_PAGE_LABEL");
            _this_1.paginator._intl.firstPageLabel = _this_1.translate.instant("PAGES.GENERAL.FIRST_PAGE_LABEL");
            _this_1.dataSource.paginator = _this_1.paginator;
            _this_1.dataSource.sort = _this_1.sort;
        }, function (err) {
            _this_1.isLoading = false;
            _this.datasize = 0;
            console.log(err);
            _this_1.isLoadingResults = false;
        });
    };
    // ============================================
    // OnSubmit
    // ============================================
    MandatFilterComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        var controls = this.searchForm.controls;
        /** check form */
        if (this.searchForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        var type = this.searchForm.get("type").value;
        var statut = this.searchForm.get("statut").value;
        this.service.getAssociationbytypeAndSttatus(type, statut).subscribe(function (data) {
            console.log(data);
            var _this = _this_1;
            _this_1.isLoading = false;
            _this.datasize = data.length;
            _this_1.dataSource = new MatTableDataSource(data);
            _this_1.isLoadingResults = false;
            _this_1.paginator._intl.itemsPerPageLabel = _this_1.translate.instant("PAGES.GENERAL.ITEMS_PER_PAGE_LABEL");
            _this_1.paginator._intl.nextPageLabel = _this_1.translate.instant("PAGES.GENERAL.NEXT_PAGE_LABEL");
            _this_1.paginator._intl.previousPageLabel = _this_1.translate.instant("PAGES.GENERAL.PREVIOUS_PAGE_LABEL");
            _this_1.paginator._intl.lastPageLabel = _this_1.translate.instant("PAGES.GENERAL.LAST_PAGE_LABEL");
            _this_1.paginator._intl.firstPageLabel = _this_1.translate.instant("PAGES.GENERAL.FIRST_PAGE_LABEL");
            _this_1.dataSource.paginator = _this_1.paginator;
            _this_1.dataSource.sort = _this_1.sort;
        }, function (err) {
            _this_1.isLoading = false;
            console.log(err);
            _this_1.isLoadingResults = false;
        });
        //dateDebut = this.datePipe.transform(dateDebut, "yyyy-MM-dd");
        //dateFin = this.datePipe.transform(dateFin, "yyyy-MM-dd");
        /* console.log("date D ::"+ dateDebut + " " + "date F ::"+ dateFin)
    
        this.isLoading = true;
        const _this = this;
        this.associationService.getMondatBureauBetweenDates(dateDebut, dateFin)
          .pipe(delay(300))
          .subscribe(
            (data) => {
              console.log('Liste Ass : ' + JSON.stringify(data, null, 2))
              this.isLoading = false;
              _this.datasize = data.length
              this.dataSource = new MatTableDataSource(data);
              this.isLoadingResults = false;
              this.paginator._intl.itemsPerPageLabel = this.translate.instant(
                "PAGES.GENERAL.ITEMS_PER_PAGE_LABEL"
              );
              this.paginator._intl.nextPageLabel = this.translate.instant(
                "PAGES.GENERAL.NEXT_PAGE_LABEL"
              );
              this.paginator._intl.previousPageLabel = this.translate.instant(
                "PAGES.GENERAL.PREVIOUS_PAGE_LABEL"
              );
              this.paginator._intl.lastPageLabel = this.translate.instant(
                "PAGES.GENERAL.LAST_PAGE_LABEL"
              );
              this.paginator._intl.firstPageLabel = this.translate.instant(
                "PAGES.GENERAL.FIRST_PAGE_LABEL"
              );
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            },
            (err) => {
              this.isLoading = false;
              _this.datasize = 0;
              console.log(err);
              this.isLoadingResults = false;
            }
          ); */
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], MandatFilterComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], MandatFilterComponent.prototype, "sort", void 0);
    MandatFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-mandat-filter',
            templateUrl: './mandat-filter.component.html',
            styleUrls: ['./mandat-filter.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            AssociationService,
            TranslateService,
            Router,
            FilesUtilsService,
            FormBuilder,
            DatePipe])
    ], MandatFilterComponent);
    return MandatFilterComponent;
}());
export { MandatFilterComponent };
//# sourceMappingURL=mandat-filter.component.js.map