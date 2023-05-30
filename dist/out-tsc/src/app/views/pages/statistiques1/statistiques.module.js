import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";
import { StatistiquesComponent } from "./statistiques.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardProduitComponent } from "./dashboard/dashboard-produit/dashboard-produit.component";
import { DashboardCarreComponent } from "./dashboard/dashboard-carre/dashboard-carre.component";
var StatistiquesModule = /** @class */ (function () {
    function StatistiquesModule() {
    }
    StatistiquesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                StatistiquesComponent,
                DashboardComponent,
                DashboardProduitComponent,
                DashboardCarreComponent,
            ],
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
                                        component: DashboardCarreComponent,
                                        outlet: "aside",
                                    },
                                    {
                                        path: "",
                                        component: DashboardProduitComponent,
                                    },
                                ],
                            },
                        ],
                    },
                ]),
            ],
        })
    ], StatistiquesModule);
    return StatistiquesModule;
}());
export { StatistiquesModule };
//# sourceMappingURL=statistiques.module.js.map