import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListNotationComponent } from "./list-notation/list-notation.component";
import { NotationComponent } from "./notation.component";
import { PagesModule } from "../pages.module";
import { RouterModule } from "@angular/router";
import { AddNotationComponent } from "./add-notation/add-notation.component";
import { NoterPersonnelComponent } from "./noter-personnel/noter-personnel.component";
import { ListNoteComponent } from './list-note/list-note.component';
import { EditNotationComponent } from './edit-notation/edit-notation.component';
var NotationModule = /** @class */ (function () {
    function NotationModule() {
    }
    NotationModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                NotationComponent,
                ListNotationComponent,
                AddNotationComponent,
                NoterPersonnelComponent,
                ListNoteComponent,
                EditNotationComponent,
            ],
            imports: [
                PagesModule,
                CommonModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: NotationComponent,
                        children: [
                            {
                                path: "list-notation",
                                component: ListNotationComponent,
                            },
                            {
                                path: "edit-notation",
                                component: EditNotationComponent,
                            },
                            {
                                path: "list-note",
                                component: ListNoteComponent,
                            },
                            {
                                path: "add-notation",
                                component: AddNotationComponent,
                            },
                            {
                                path: "noter-personnel",
                                component: NoterPersonnelComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], NotationModule);
    return NotationModule;
}());
export { NotationModule };
//# sourceMappingURL=notation.module.js.map