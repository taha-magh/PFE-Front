import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { PersonnelComponent } from "./personnel.component";
import { RouterModule } from "@angular/router";
import { ListPersonnelComponent } from "./list-personnel/list-personnel.component";
import { ShowPersonnelComponent } from "./show-personnel/show-personnel.component";
import { AddPersonnelComponent } from "./add-personnel/add-personnel.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { EditPersonnelComponent } from "./edit-personnel/edit-personnel.component";
import { ListAbsenceComponent } from "./list-absence/list-absence.component";
import { AddAbsenceComponent } from "./add-absence/add-absence.component";
import { AppliquerSanctionsComponent } from "./appliquer-sanctions/appliquer-sanctions.component";
import { ShowSanctionsComponent } from "./show-sanctions/show-sanctions.component";
import { TabSanctionsComponent } from "./tab-sanctions/tab-sanctions.component";
import { TabAbsenceComponent } from "./tab-absence/tab-absence.component";
import { EditAbsenceComponent } from "./edit-absence/edit-absence.component";
import { EditSanctionsComponent } from "./edit-sanctions/edit-sanctions.component";
import { ListPesonnelCommuneComponent } from './list-pesonnel-commune/list-pesonnel-commune.component';
var PersonnelModule = /** @class */ (function () {
    function PersonnelModule() {
    }
    PersonnelModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                PersonnelComponent,
                ListPersonnelComponent,
                ShowPersonnelComponent,
                AddPersonnelComponent,
                EditPersonnelComponent,
                ListAbsenceComponent,
                AddAbsenceComponent,
                AppliquerSanctionsComponent,
                ShowSanctionsComponent,
                TabSanctionsComponent,
                TabAbsenceComponent,
                EditAbsenceComponent,
                EditSanctionsComponent,
                ListPesonnelCommuneComponent,
            ],
            imports: [
                MatDialogModule,
                MatStepperModule,
                MatIconModule,
                PagesModule,
                CommonModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: PersonnelComponent,
                        children: [
                            {
                                path: "list-personnel",
                                component: ListPersonnelComponent,
                            },
                            {
                                path: "list-personnel-commune",
                                component: ListPesonnelCommuneComponent,
                            },
                            {
                                path: "show-personnel",
                                component: ShowPersonnelComponent,
                            },
                            {
                                path: "add-personnel",
                                component: AddPersonnelComponent,
                            },
                            {
                                path: "edit-personnel",
                                component: EditPersonnelComponent,
                            },
                            {
                                path: "list-absence",
                                component: ListAbsenceComponent,
                            },
                            {
                                path: "add-absence",
                                component: AddAbsenceComponent,
                            },
                            {
                                path: "appliquer-sanctions",
                                component: AppliquerSanctionsComponent,
                            },
                            {
                                path: "show-sanctions",
                                component: ShowSanctionsComponent,
                            },
                            {
                                path: "edit-absence",
                                component: EditAbsenceComponent,
                            },
                            {
                                path: "edit-sanctions",
                                component: EditSanctionsComponent,
                            },
                        ],
                    },
                ]),
            ],
            entryComponents: [AddAbsenceComponent]
        })
    ], PersonnelModule);
    return PersonnelModule;
}());
export { PersonnelModule };
//# sourceMappingURL=personnel.module.js.map