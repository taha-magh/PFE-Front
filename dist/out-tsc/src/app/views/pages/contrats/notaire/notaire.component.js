import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
var NotaireComponent = /** @class */ (function () {
    function NotaireComponent(translate, router, datePipe) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "NUM",
            "Nom",
            "Prenom",
            "Raison",
            "Cin",
            "Gsm",
            "Fax",
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
                NUM: "1",
                Nom: "Benouahi",
                Prenom: "Ayoub",
                Raison: "Raison",
                Cin: "A3234",
                Gsm: "064303290",
                Fax: "059329021",
            },
            {
                NUM: "2",
                Nom: "Benouahi",
                Prenom: "Bilal",
                Raison: "Raison",
                Cin: "A3234",
                Gsm: "064303290",
                Fax: "059329021",
            },
            {
                NUM: "3",
                Nom: "Benouahi",
                Prenom: "Ahmed",
                Raison: "Raison",
                Cin: "A3234",
                Gsm: "064303290",
                Fax: "059329021",
            },
            {
                NUM: "4",
                Nom: "Benouahi",
                Prenom: "Salwa",
                Raison: "Raison",
                Cin: "A3234",
                Gsm: "064303290",
                Fax: "059329021",
            },
            {
                NUM: "5",
                Nom: "Benouahi",
                Prenom: "Mousa",
                Raison: "Raison",
                Cin: "A3234",
                Gsm: "064303290",
                Fax: "059329021",
            },
        ];
    }
    NotaireComponent.prototype.deleteAssociation = function (id) {
        var _this = this;
        Swal.fire({
            title: "Voulez vous supprimer cet enregistrement ?",
            icon: "question",
            iconHtml: "?",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "Oui",
            cancelButtonText: "Non",
        }).then(function (result) {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: _this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    NotaireComponent.prototype.ngOnInit = function () {
        this.columns = ["Nom", "Prenom", "Raison", "Cin", "Gsm", "Fax"];
        this.dataSource = new MatTableDataSource(this.data);
    };
    NotaireComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    NotaireComponent.prototype.addAssociation = function () {
        //Alert
        this.router.navigate(["/pages/contrats/add-notaire"]);
    };
    NotaireComponent.prototype.DetailAssociation = function () {
        //Alert
        this.router.navigate(["/pages/contrats/detaille-notaire"]);
    };
    NotaireComponent.prototype.MoudifierAssociation = function () {
        this.router.navigate(["/pages/contrats/upd-notaire"]);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], NotaireComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], NotaireComponent.prototype, "sort", void 0);
    NotaireComponent = tslib_1.__decorate([
        Component({
            selector: "kt-notaire",
            templateUrl: "./notaire.component.html",
            styleUrls: ["./notaire.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe])
    ], NotaireComponent);
    return NotaireComponent;
}());
export { NotaireComponent };
//# sourceMappingURL=notaire.component.js.map