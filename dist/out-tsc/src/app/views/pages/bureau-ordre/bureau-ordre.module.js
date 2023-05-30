import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BureauOrdreComponent } from "./bureau-ordre.component";
import { ListCourriersComponent } from "./list-courriers/list-courriers.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "../pages.module";
import { NewCourrierComponent } from './new-courrier/new-courrier.component';
import { MatDialogModule } from "@angular/material";
var BureauOrdreModule = /** @class */ (function () {
    function BureauOrdreModule() {
    }
    BureauOrdreModule = tslib_1.__decorate([
        NgModule({
            declarations: [BureauOrdreComponent, ListCourriersComponent, NewCourrierComponent],
            imports: [
                MatDialogModule,
                PagesModule,
                CommonModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: BureauOrdreComponent,
                        children: [
                            {
                                path: "list-courriers",
                                component: ListCourriersComponent,
                            },
                            {
                                path: "new-courrier",
                                component: NewCourrierComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], BureauOrdreModule);
    return BureauOrdreModule;
}());
export { BureauOrdreModule };
//# sourceMappingURL=bureau-ordre.module.js.map