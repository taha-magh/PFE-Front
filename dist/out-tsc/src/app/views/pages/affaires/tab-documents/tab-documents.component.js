import * as tslib_1 from "tslib";
import { environment } from "../../../../../environments/environment";
import { Component, ViewChild, ChangeDetectionStrategy, ElementRef } from "@angular/core";
import { AssociationService } from "../../utils/association.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { FilesUtilsService } from "../../utils/files-utils.service";
import { FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';
var TabDocumentsComponent = /** @class */ (function () {
    // ============================================
    // Constructeur
    // ============================================
    function TabDocumentsComponent(service, router, route, formBuilder, fileService, translate) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.fileService = fileService;
        this.translate = translate;
        this.unsubscribe = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "icon",
            "name",
            "dateFile",
            "fSize",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
    }
    TabDocumentsComponent.prototype.ngOnInit = function () {
        this.fileService.fileSizeDetector();
        this.addFileForm = this.formBuilder.group({
            _file: [],
        });
        this.getAssociationFiles();
    };
    /**
     * On Destroy
     */
    TabDocumentsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
        console.log("destroy");
    };
    // ============================================
    // Recuperer tous les association
    // ============================================
    TabDocumentsComponent.prototype.getAssociationFiles = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        //this.service.getFilesById("/PjAssociation/Allpjs/", this.id).then(
        this.service.getByIdFiles(this.id)
            .subscribe(function (data) {
            _this.isLoading = false;
            _this.dataSource = new MatTableDataSource(data);
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
    TabDocumentsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    // ============================================
    // Methode de suppression des associations
    // ============================================
    TabDocumentsComponent.prototype.deleteHebergement = function (id) {
        var _this = this;
        Swal.fire({
            title: 'هل تريد مسح هذه المعطيات ؟',
            icon: 'question',
            iconHtml: '؟',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                _this.service
                    .deletefiles("/PjAssociation/", id)
                    .subscribe(function (data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.getAssociationFiles();
                });
            }
        });
    };
    // ============================================
    // Methode de modification activites
    // ============================================
    TabDocumentsComponent.prototype.editHebergement = function (id) {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        window.localStorage.removeItem("hebergId");
        window.localStorage.setItem("hebergId", "" + id);
        this.router.navigate(["hebergement/edit-hebergement/" + id]);
    };
    TabDocumentsComponent.prototype.detailsHebergement = function (id) {
        var idHeb = this.route.snapshot.params["id"];
        window.localStorage.removeItem("hebergId");
        window.localStorage.setItem("hebergId", "" + idHeb);
        this.router.navigate(["/hebergement/show-hebergement/" + id]);
    };
    // ============================================
    // Methode d'insertion des convention
    // ============================================
    TabDocumentsComponent.prototype.addDocuments = function () {
        this.id = this.route.snapshot.params["id"];
        window.localStorage.removeItem("assocId");
        window.localStorage.setItem("assocId", "" + this.id);
        this.router.navigate(["document-admin/add-document-admin"]);
    };
    // =================================================================
    // Download file from server
    // =================================================================
    TabDocumentsComponent.prototype.onClickPjName = function (e, id) {
        //console.log("You clicked: " + e);
        var r = e.substring(0, e.length - 4);
        console.log(r);
        window.open(environment.API_ALFRESCO_URL + "/PjAssociation/" + r);
    };
    // =================================================================
    // Delete file from server
    // =================================================================
    TabDocumentsComponent.prototype.onDeleteFile = function (id) {
        var _this = this;
        if (confirm(this.translate.instant("PAGES.GENERAL.MSG_DELETED"))) {
            console.log("Delete file ID: " + id);
            this.service
                .deletefiles("/PjAssociation/", id)
                .subscribe(function (data) {
                console.log("File courrier deleted : " + id);
                _this.isLoading = true;
                _this.dataSource = new MatTableDataSource([]);
                _this.getAssociationFiles();
            });
            // Notification
        }
    };
    // ============================================================
    // get file name
    // ============================================================
    TabDocumentsComponent.prototype.FileName = function (file) {
        return this.fileService.getFileName(file);
    };
    // ============================================================
    // get file extension & icons
    // ============================================================
    TabDocumentsComponent.prototype.FileExtension = function (file) {
        return this.fileService.getExtensionFile(file);
    };
    // ============================================================
    // Upload files
    // ============================================================
    TabDocumentsComponent.prototype.fileChange = function (event) {
        this.uploadFiles = event.target.files;
        if (event.target.files.length > 0) {
            console.log("file size !! " + event.target.files.length);
            this.addFileForm.patchValue(this.uploadFiles);
        }
    };
    // ============================================
    // OnSubmit
    // ============================================
    TabDocumentsComponent.prototype.onSubmit = function () {
        var _this = this;
        var controls = this.addFileForm.controls;
        /** check form */
        if (this.addFileForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        //console.log("insert test !!");
        this.id = this.route.snapshot.params["id"];
        //console.log("id : " + this.id + " et file " + this.uploadFiles.length);
        if (this.uploadFiles != null) {
            this.service.updloadFile(this.uploadFiles, this.id)
                .subscribe(function (res) {
                console.log("File inserted " + JSON.stringify(res)),
                    _this.isLoading = true;
                _this.dataSource = new MatTableDataSource([]);
                _this.getAssociationFiles();
                // reset file input
                _this.inputFile.nativeElement.value = '';
            }, function (err) { return console.log("File not inserted " + JSON.stringify(err)); });
        }
    };
    // ============================================
    // reset file
    // ============================================
    TabDocumentsComponent.prototype.resetFile = function () {
        // reset file input
        this.inputFile.nativeElement.value = '';
        this.addFileForm.get('_file').reset();
    };
    tslib_1.__decorate([
        ViewChild('inputFile', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TabDocumentsComponent.prototype, "inputFile", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: false }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TabDocumentsComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: false }),
        tslib_1.__metadata("design:type", MatSort)
    ], TabDocumentsComponent.prototype, "sort", void 0);
    TabDocumentsComponent = tslib_1.__decorate([
        Component({
            selector: "kt-tab-documents",
            templateUrl: "./tab-documents.component.html",
            styleUrls: ["./tab-documents.component.scss"],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [AssociationService,
            Router,
            ActivatedRoute,
            FormBuilder,
            FilesUtilsService,
            TranslateService])
    ], TabDocumentsComponent);
    return TabDocumentsComponent;
}());
export { TabDocumentsComponent };
//# sourceMappingURL=tab-documents.component.js.map