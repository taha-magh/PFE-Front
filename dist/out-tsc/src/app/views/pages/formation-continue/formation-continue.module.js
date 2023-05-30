import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationContinueComponent } from './formation-continue.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { MatStepperModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ShowFormationComponent } from './show-formation/show-formation.component';
var FormationContinueModule = /** @class */ (function () {
    function FormationContinueModule() {
    }
    FormationContinueModule = tslib_1.__decorate([
        NgModule({
            declarations: [FormationContinueComponent, ListeFormationComponent, AddFormationComponent, ShowFormationComponent],
            imports: [
                MatStepperModule,
                PagesModule,
                CommonModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: FormationContinueComponent,
                        children: [
                            {
                                path: "liste-formation",
                                component: ListeFormationComponent,
                            },
                            {
                                path: "add-formation",
                                component: AddFormationComponent,
                            },
                            {
                                path: "show-formation",
                                component: ShowFormationComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], FormationContinueModule);
    return FormationContinueModule;
}());
export { FormationContinueModule };
//# sourceMappingURL=formation-continue.module.js.map