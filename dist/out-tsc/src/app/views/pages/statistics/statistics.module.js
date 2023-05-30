import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialsModule } from '../utils/materials/materials.module';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { StatisticsComponent } from "./statistics.component";
import { Board1Component } from './board/board1/board1.component';
import { Board2Component } from './board/board2/board2.component';
var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib_1.__decorate([
        NgModule({
            declarations: [BoardComponent, StatisticsComponent, Board1Component, Board2Component],
            imports: [
                PagesModule,
                MaterialsModule,
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                TranslateModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: StatisticsComponent,
                        children: [
                            {
                                path: "board",
                                component: BoardComponent,
                                children: [
                                    {
                                        path: "",
                                        component: Board1Component,
                                        outlet: "aside",
                                    },
                                    {
                                        path: "",
                                        component: Board2Component,
                                    },
                                ],
                            },
                        ],
                    },
                ]),
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());
export { StatisticsModule };
//# sourceMappingURL=statistics.module.js.map