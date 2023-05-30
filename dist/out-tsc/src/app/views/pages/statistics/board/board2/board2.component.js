import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
var Board2Component = /** @class */ (function () {
    // ============================================
    // constructeur
    // ============================================
    function Board2Component(fb, translate, datePipe) {
        this.fb = fb;
        this.translate = translate;
        this.datePipe = datePipe;
        this.xAxisData = [];
        this.yAxisData = [];
        this.data = [];
        this.isLoading = true;
        this.chartType = 'pie';
        this.chartType1 = 'bar';
        this.sizeData = 0;
        this.idassoction = 0;
        this.displayedColumns = ["nbAffaire", "type", "tribunal", "demandresse", "defenderesse"];
        this.data = [{
                "num": "1/2022",
                "nom": "nom affaire 1 ",
                "defendresse": "Commune Casablanca",
                "tribunal": "Tech ",
                "typeAffaire": "Type 1",
                "demandresse": "Partie  ",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "2/2022",
                "nom": "nom affaire 2",
                "defendresse": "CM ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Type 2",
                "demandresse": "Partie",
                "dateDebut": "21-2-2020"
            },
            {
                "num": "3/2022",
                "nom": "nom affaire 3",
                "defendresse": "Tech ",
                "tribunal": "Tech ",
                "typeAffaire": "Type 3",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "4/2022",
                "nom": "nom affaire 4",
                "defendresse": "Tech ",
                "tribunal": "Tribunal ",
                "typeAffaire": "Type 4",
                "demandresse": "Partie",
                "dateDebut": "01-01-2020"
            },
            {
                "num": "5/2022",
                "nom": "nom affaire 5",
                "defendresse": "Tech ",
                "tribunal": "Tech ",
                "typeAffaire": "Type 5",
                "demandresse": "CM",
                "dateDebut": "01-01-2020"
            }
        ];
    }
    // ============================================
    // ngOninit
    // ============================================
    Board2Component.prototype.ngOnInit = function () {
        this.searchForm = this.fb.group({
            type: ["", Validators.required],
            commune: ["", Validators.required],
            dateDebut: ["", Validators.required],
            dateFin: ["", Validators.required],
        });
        // get datasource
        this.getDataSource(this.data);
        this.getDataDropDownList();
    };
    // ============================================
    // ngAfterView
    // ============================================
    Board2Component.prototype.ngAfterViewInit = function () {
        //	this.data.map((data) => data.num);
        var nbrAssoc = ["1", "2", "4", "1", "5"];
        var typeAssoc = this.data.map(function (data) { return data.typeAffaire; });
        //console.log("List of labels: " + typeAssoc);
        this.chartOption(typeAssoc, nbrAssoc, this.chartType);
    };
    // ============================================
    // OnSubmit
    // ============================================
    Board2Component.prototype.onSubmit = function () {
    };
    Board2Component.prototype.selectAssoication = function (event) {
        console.log(event.isUserInput);
        //this.dash1.destroy();
        if (event.isUserInput) {
            this.idassoction = event.source.value;
            this.chartType1 = "bar";
        }
    };
    // ============================================
    // Charger les statistiques sous forme graphe
    // ============================================
    Board2Component.prototype.fillChartByParam = function (type, commune, chartType, dateD, dateF) {
        var _this = this;
    };
    // ============================================
    // Charger les liste externe
    // ============================================
    Board2Component.prototype.getDataDropDownList = function () {
        /*this.service.getData().subscribe(
            (data) => {
                this.types = data[1];
                console.log(data[1]);
            },
            (err) => {
                console.log(err);
            }
    );*/
    };
    // ============================================
    // OnChange radio
    // ============================================
    Board2Component.prototype.selectionChanged = function (event) {
        var type = this.searchForm.get('type').value;
        var commune = this.searchForm.get('commune').value;
        var dateDebut = this.searchForm.get("dateDebut").value;
        var dateFin = this.searchForm.get("dateFin").value;
        dateDebut = this.datePipe.transform(dateDebut, "yyyy-MM-dd");
        dateFin = this.datePipe.transform(dateFin, "yyyy-MM-dd");
        this.chartType = event.value;
        console.log("Type & commune: " + type + "|" + commune);
        if (type == "" || commune == "") {
            this.chartType = event.value;
            this.dash.destroy();
            this.ngAfterViewInit();
        }
        var controls = this.searchForm.controls;
        /** check form */
        if (this.searchForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        if (event.value == "pie" || event.value == "doughnut") {
            this.fillChartByParam(type, commune, this.chartType, dateDebut, dateFin);
        }
        else if (event.value == "bar" || event.value == "line") {
            this.fillChartByParam(type, commune, this.chartType, dateDebut, dateFin);
        }
    };
    Board2Component.prototype.selectionChanged1 = function (event) {
        this.chartType1 = event.value;
        console.log(event);
    };
    // ============================================
    //ngAfterView
    // ============================================
    Board2Component.prototype.getCharts = function () {
    };
    // ============================================
    // get data
    // ============================================
    // ============================================
    //
    // ============================================
    Board2Component.prototype.getDataSource = function (data) {
        this.dataSource = new MatTableDataSource(data);
        this.paginator._intl.itemsPerPageLabel = this.translate.instant("PAGES.GENERAL.ITEMS_PER_PAGE_LABEL");
        this.paginator._intl.nextPageLabel = this.translate.instant("PAGES.GENERAL.NEXT_PAGE_LABEL");
        this.paginator._intl.previousPageLabel = this.translate.instant("PAGES.GENERAL.PREVIOUS_PAGE_LABEL");
        this.paginator._intl.lastPageLabel = this.translate.instant("PAGES.GENERAL.LAST_PAGE_LABEL");
        this.paginator._intl.firstPageLabel = this.translate.instant("PAGES.GENERAL.FIRST_PAGE_LABEL");
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    // ============================================
    //
    // ============================================
    Board2Component.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    };
    // ============================================
    // Download graphe
    // ============================================
    /*downloadCanvas(event) {
          var anchor = event.target;
          console.log("Downloading ...");
          anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
          anchor.download = "chart.jpg";
      }*/
    // ============================================
    // Refresh datatable & graph
    // ============================================
    Board2Component.prototype.refresh = function () {
        this.dataSource = new MatTableDataSource(null);
        this.isLoading = true;
        this.dash.destroy();
        this.getDataSource(this.data);
        this.ngAfterViewInit();
    };
    // ===========================================
    // ChartJs
    // ===========================================
    Board2Component.prototype.chartOption = function (libelle, id, type) {
        var _this_1 = this;
        var ctx = document.getElementById('canvas3');
        if (type == "pie" || type == "doughnut") {
            this.dash = new Chart(ctx, {
                type: type,
                data: {
                    labels: libelle,
                    datasets: [
                        {
                            label: "عدد ",
                            data: id,
                            backgroundColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            borderColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            borderWidth: 0,
                            fill: true,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: true,
                    }
                },
            });
        }
        else {
            this.dash = new Chart(ctx, {
                type: type,
                data: {
                    labels: libelle,
                    datasets: [
                        {
                            label: "عدد ",
                            data: id,
                            backgroundColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            //borderColor: libelle.map(() => `rgba(${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} ,${this.getRandomNumber(0,255)} , 1)`),
                            borderWidth: 0,
                            fill: false,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                            },
                        ],
                        yAxes: [
                            {
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                },
            });
        }
    };
    Board2Component.prototype.chartOptionAssocation = function (libelle, id, type) {
        var _this_1 = this;
        var ctx = document.getElementById('canvas1');
        //var ctxPie = document.getElementById('canvasPie');
        if (type == "pie" || type == "doughnut") {
            this.dash1 = new Chart(ctx, {
                type: type,
                data: {
                    labels: libelle,
                    datasets: [
                        {
                            label: "عدد الجمعيات",
                            data: id,
                            backgroundColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            borderColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            borderWidth: 0,
                            fill: true,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: true,
                    }
                },
            });
        }
        else {
            this.dash = new Chart(ctx, {
                type: type,
                data: {
                    labels: libelle,
                    datasets: [
                        {
                            label: "عدد ",
                            data: id,
                            backgroundColor: libelle.map(function () { return "rgba(" + _this_1.getRandomNumber(0, 255) + "," + _this_1.getRandomNumber(0, 255) + " ," + _this_1.getRandomNumber(0, 255) + " , 1)"; }),
                            //borderColor: libelle.map(() => `rgba(${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} ,${this.getRandomNumber(0,255)} , 1)`),
                            borderWidth: 0,
                            fill: false,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                            },
                        ],
                        yAxes: [
                            {
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                },
            });
        }
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], Board2Component.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], Board2Component.prototype, "sort", void 0);
    Board2Component = tslib_1.__decorate([
        Component({
            selector: 'kt-board2',
            templateUrl: './board2.component.html',
            styleUrls: ['./board2.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            TranslateService,
            DatePipe])
    ], Board2Component);
    return Board2Component;
}());
export { Board2Component };
//# sourceMappingURL=board2.component.js.map