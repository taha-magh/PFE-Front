import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";
import { ListEvenementComponent } from "./list-evenement/list-evenement.component";
import { AddEvenementComponent } from "./add-evenement/add-evenement.component";
import { EvenementComponent } from "./evenement.component";
import { EditEvenementComponent } from "./edit-evenement/edit-evenement.component";
import { ShowEvenementComponent } from './show-evenement/show-evenement.component';
var EvenementModule = /** @class */ (function () {
    function EvenementModule() {
    }
    EvenementModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AddEvenementComponent,
                EvenementComponent,
                EditEvenementComponent,
                ListEvenementComponent,
                ShowEvenementComponent,
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
                        component: EvenementComponent,
                        children: [
                            {
                                path: "add-evenement",
                                component: AddEvenementComponent,
                            },
                            {
                                path: "list-evenement",
                                component: ListEvenementComponent,
                            },
                            {
                                path: "edit-evenement",
                                component: EditEvenementComponent,
                            },
                            {
                                path: "show-evenement",
                                component: ShowEvenementComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], EvenementModule);
    return EvenementModule;
}());
export { EvenementModule };
//# sourceMappingURL=evenement.module.js.map