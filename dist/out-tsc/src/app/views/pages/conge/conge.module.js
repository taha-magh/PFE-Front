import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CongeComponent } from "./conge.component";
import { PagesModule } from "../pages.module";
import { RouterModule } from "@angular/router";
import { MatStepperModule } from "@angular/material/stepper";
import { ListCongeComponent } from "./list-conge/list-conge.component";
import { AddCongeComponent } from "./add-conge/add-conge.component";
import { ImprimerAttestationCongeComponent } from './imprimer-attestation-conge/imprimer-attestation-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { ShowCongeComponent } from './show-conge/show-conge.component';
var CongeModule = /** @class */ (function () {
    function CongeModule() {
    }
    CongeModule = tslib_1.__decorate([
        NgModule({
            declarations: [CongeComponent, ListCongeComponent, AddCongeComponent, ImprimerAttestationCongeComponent, EditCongeComponent, ShowCongeComponent],
            imports: [
                MatStepperModule,
                PagesModule,
                CommonModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: CongeComponent,
                        children: [
                            {
                                path: "list-conge",
                                component: ListCongeComponent,
                            },
                            {
                                path: "add-conge",
                                component: AddCongeComponent,
                            },
                            {
                                path: "edit-conge",
                                component: EditCongeComponent,
                            },
                            {
                                path: "show-conge",
                                component: ShowCongeComponent,
                            },
                            {
                                path: "imprimer-attestation-conge",
                                component: ImprimerAttestationCongeComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], CongeModule);
    return CongeModule;
}());
export { CongeModule };
//# sourceMappingURL=conge.module.js.map