import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var AddFormationComponent = /** @class */ (function () {
    function AddFormationComponent(translate, router, datePipe, excelService) {
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.data = [];
        this.data2 = [];
        this.footerData = [];
        // ============================================
        // Presentation de datasource
        // ============================================
        this.displayedColumns = [
            "NUM",
            "Nom",
            "Prenom",
            "Matricule",
            "Cin",
            "Division",
            "Service",
            "Poste",
            "Telephone",
            "actions",
        ];
        // ============================================
        // Declarations
        // ============================================
        this.dataSource = new MatTableDataSource();
        this.dataSource2 = new MatTableDataSource();
        this.isLoadingResults = true;
        this.isLoading = true;
        this.data = [
            {
                NUM: "1",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
            },
            {
                NUM: "12",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
            },
            {
                NUM: "3",
                Nom: "Nom1",
                Prenom: "Prenom1",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
            },
        ];
    }
    AddFormationComponent.prototype.ngOnInit = function () {
        this.columns = [
            "NUM",
            "Nom",
            "Prenom",
            "Matricule",
            "Cin",
            "Division",
            "Service",
            "Poste",
            "Telephone",
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource2 = new MatTableDataSource(this.data2);
    };
    AddFormationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    // addPesee(): void {
    // 	this.router.navigate(["pages/pesee/add-pesee"]);
    // }
    AddFormationComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/formation-continue/liste-formation"]);
    };
    AddFormationComponent.prototype.Details = function () {
        this.router.navigate(["pages/formation-continue/show-formation"]);
    };
    AddFormationComponent.prototype.Edit = function () {
        this.router.navigate(["pages/personnel/edit-personnel"]);
    };
    AddFormationComponent.prototype.Add = function () {
        this.router.navigate(["pages/personnel/add-personnel"]);
    };
    AddFormationComponent.prototype.createDataJson = function (i) {
        return {
            NUM: this.personnel[i].NUM,
            Nom: this.personnel[i].Nom,
            Prenom: this.personnel[i].Prenom,
            Matricule: this.personnel[i].Matricule,
            Cin: this.personnel[i].Cin,
            Division: this.personnel[i].Division,
            Service: this.personnel[i].Service,
            Poste: this.personnel[i].Poste,
            Telephone: this.personnel[i].Telephone,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], AddFormationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], AddFormationComponent.prototype, "sort", void 0);
    AddFormationComponent = tslib_1.__decorate([
        Component({
            selector: "kt-add-formation",
            templateUrl: "./add-formation.component.html",
            styleUrls: ["./add-formation.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], AddFormationComponent);
    return AddFormationComponent;
}());
export { AddFormationComponent };
//# sourceMappingURL=add-formation.component.js.map