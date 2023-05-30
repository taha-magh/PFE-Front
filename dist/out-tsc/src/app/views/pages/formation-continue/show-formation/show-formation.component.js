import * as tslib_1 from "tslib";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ExcelAssociationService } from "../../utils/excel-association.service";
var ShowFormationComponent = /** @class */ (function () {
    function ShowFormationComponent(translate, router, datePipe, excelService) {
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
    ShowFormationComponent.prototype.ngOnInit = function () {
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
    ShowFormationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    //changes
    // addPesee(): void {
    // 	this.router.navigate(["pages/pesee/add-pesee"]);
    // }
    ShowFormationComponent.prototype.EtapeDernier = function () {
        this.router.navigate(["pages/formation-continue/liste-formation"]);
    };
    ShowFormationComponent.prototype.Details = function () {
        this.router.navigate(["pages/formation-continue/show-formation"]);
    };
    ShowFormationComponent.prototype.Edit = function () {
        this.router.navigate(["pages/personnel/edit-personnel"]);
    };
    ShowFormationComponent.prototype.Add = function () {
        this.router.navigate(["pages/personnel/add-personnel"]);
    };
    ShowFormationComponent.prototype.createDataJson = function (i) {
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
    ], ShowFormationComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], ShowFormationComponent.prototype, "sort", void 0);
    ShowFormationComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-show-formation',
            templateUrl: './show-formation.component.html',
            styleUrls: ['./show-formation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            Router,
            DatePipe,
            ExcelAssociationService])
    ], ShowFormationComponent);
    return ShowFormationComponent;
}());
export { ShowFormationComponent };
//# sourceMappingURL=show-formation.component.js.map