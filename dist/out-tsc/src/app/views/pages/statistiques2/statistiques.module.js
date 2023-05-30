import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PagesModule } from '../pages.module';
import { MaterialsModule } from '../utils/materials/materials.module';
import { StatistiquesComponent } from './statistiques.component';
import { DashboardEvolutionComponent } from './dashboard/dashboard-evolution/dashboard-evolution.component';
import { DashboardDistributionComponent } from './dashboard/dashboard-distribution/dashboard-distribution.component';
var StatistiquesModule = /** @class */ (function () {
    function StatistiquesModule() {
    }
    StatistiquesModule = tslib_1.__decorate([
        NgModule({
            declarations: [StatistiquesComponent, DashboardComponent, DashboardEvolutionComponent, DashboardDistributionComponent],
            imports: [
                PagesModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                TranslateModule.forChild(),
                MaterialsModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: StatistiquesComponent,
                        children: [
                            {
                                path: "dashboard",
                                component: DashboardComponent,
                                children: [
                                    {
                                        path: "",
                                        component: DashboardEvolutionComponent,
                                    },
                                    {
                                        path: "",
                                        component: DashboardDistributionComponent,
                                        outlet: "aside",
                                    },
                                ],
                            },
                        ],
                    },
                ]),
            ]
        })
    ], StatistiquesModule);
    return StatistiquesModule;
}());
export { StatistiquesModule };
//# sourceMappingURL=statistiques.module.js.map