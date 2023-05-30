import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
var AudiencesComponent = /** @class */ (function () {
    function AudiencesComponent() {
        this.data = [];
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = [
            "objet",
            "tribunal",
            "date",
            "type",
            "affaire",
            "actions",
        ];
        this.data = [{
                "objet": "Objet d'audience 1 ",
                "tribunal": "Tribunal 1",
                "date": "12-07-2022",
                "type": "Type d'audience 1",
                "affaire": "Num 2/2022",
            },
            {
                "objet": "Objet d'audience 2 ",
                "tribunal": "Tribunal 2",
                "date": "15-07-2022",
                "type": "Type d'audience 2",
                "affaire": "Num 45/2022",
            },
            {
                "objet": "Objet d'audience 3 ",
                "tribunal": "Tribunal 1",
                "date": "13-07-2022",
                "type": "Type d'audience 1",
                "affaire": "Num 21/2022",
            },
            {
                "objet": "Objet d'audience 5 ",
                "tribunal": "Tribunal 1",
                "date": "18-07-2022",
                "type": "Type d'audience 1",
                "affaire": "Num 5/2022",
            },
        ];
    }
    AudiencesComponent.prototype.ngOnInit = function () {
        this.columns = [
            "objet",
            "tribunal",
            "date",
            "type",
            "affaire",
            "actions",
        ];
        this.dataSource = new MatTableDataSource(this.data);
        setTimeout(function () {
            $("#calendar").fullCalendar({
                height: 750,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                navLinks: true,
                editable: true,
                eventLimit: true,
                events: [
                    {
                        title: 'Audience Num112 ',
                        start: '2022-07-07T08:30:00',
                        allDay: false,
                        color: "#57cd5f"
                    },
                    {
                        title: 'Audience Num10 ',
                        start: '2022-07-13T09:30:00',
                        color: '#f9c66a' // override!
                    },
                    {
                        title: 'Audience Num123 ',
                        start: '2022-07-13T10:30:00',
                        end: '2019-03-09',
                        color: "#019efb"
                    },
                    {
                        title: 'Audience Num52 ',
                        start: '2022-07-15T10:30:00',
                        allDay: false,
                        color: "#57cd5f"
                    }
                ],
            });
        }, 100);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator, { static: true }),
        tslib_1.__metadata("design:type", MatPaginator)
    ], AudiencesComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], AudiencesComponent.prototype, "sort", void 0);
    AudiencesComponent = tslib_1.__decorate([
        Component({
            selector: 'kt-audiences',
            templateUrl: './audiences.component.html',
            styleUrls: ['./audiences.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AudiencesComponent);
    return AudiencesComponent;
}());
export { AudiencesComponent };
//# sourceMappingURL=audiences.component.js.map