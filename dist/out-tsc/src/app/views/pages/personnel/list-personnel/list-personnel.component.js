import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ListPersonnelComponent = /** @class */ (function () {
    function ListPersonnelComponent(translate, router, datePipe, excelService) {
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
            "Nombre_Absence",
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
                Nombre_Absence: "sample text",
            },
            {
                NUM: "2",
                Nom: "Nom2",
                Prenom: "Prenom2",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
                Nombre_Absence: "sample text",
            },
            {
                NUM: "3",
                Nom: "Nom3",
                Prenom: "Prenom3",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
                Nombre_Absence: "sample text",
            },
        ];
        this.data2 = [
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
                Nombre_Absence: "sample text",
            },
            {
                NUM: "2",
                Nom: "Nom2",
                Prenom: "Prenom2",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
                Nombre_Absence: "sample text",
            },
            {
                NUM: "3",
                Nom: "Nom3",
                Prenom: "Prenom3",
                Matricule: "2121214",
                Cin: "A54544",
                Division: "sample text",
                Service: "sample text",
                Poste: "sample text",
                Telephone: "sample text",
                Nombre_Absence: "sample text",
            },
        ];
    }
    ListPersonnelComponent.prototype.ngOnInit = function () {
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
            "Nombre_Absence",
        ];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource2 = new MatTableDataSource(this.data2);
    };
    ListPersonnelComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    // addPesee(): void {
    // 	this.router.navigate(["pages/pesee/add-pesee"]);
    // }
    ListPersonnelComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/affaires/dashboard"]);
    };
    ListPersonnelComponent.prototype.Details = function () {
        this.router.navigate(["pages/personnel/show-personnel"]);
    };
    ListPersonnelComponent.prototype.Edit = function () {
        this.router.navigate(["pages/personnel/edit-personnel"]);
    };
    ListPersonnelComponent.prototype.Add = function () {
        this.router.navigate(["pages/personnel/add-personnel"]);
    };
    ListPersonnelComponent.prototype.createDataJson = function (i) {
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
            Nombre_Absence: this.personnel[i].Nombre_Absence,
        };
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListPersonnelComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ListPersonnelComponent.prototype, "sort", void 0);
    ListPersonnelComponent = tslib_1.__decorate([
        Component({
            selector: "kt-list-personnel",
            templateUrl: "./list-personnel.component.html",
            styleUrls: ["./list-personnel.component.scss"],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ListPersonnelComponent);
    return ListPersonnelComponent;
}());
export { ListPersonnelComponent };
//# sourceMappingURL=list-personnel.component.js.map