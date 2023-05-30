import * as tslib_1 from "tslib";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { DelegataireComponent } from "./delegataire.component";
import { DelegatairesComponent } from "./delegataires/delegataires.component";
import { SdlComponent } from "./sdl/sdl.component";
import { UpdSdlComponent } from "./upd-sdl/upd-sdl.component";
import { UpdDelegataireComponent } from "./upd-delegataire/upd-delegataire.component";
import { DetailSdlComponent } from "./detail-sdl/detail-sdl.component";
import { DetailDelegataireComponent } from "./detail-delegataire/detail-delegataire.component";
import { AddDelegataireComponent } from "./add-delegataire/add-delegataire.component";
import { AddSdlComponent } from "./add-sdl/add-sdl.component";
import { TabDelegataireComponent } from "./tab-delegataire/tab-delegataire.component";
import { MatTabsModule } from "@angular/material";
import { AddTabDelegataireComponent } from "./add-tab-delegataire/add-tab-delegataire.component";
import { UpdTabDelegataireComponent } from "./upd-tab-delegataire/upd-tab-delegataire.component";
import { UpdTabSdlComponent } from "./upd-tab-sdl/upd-tab-sdl.component";
import { AddTabSdlComponent } from './add-tab-sdl/add-tab-sdl.component';
import { TabSdlComponent } from "./tab-sdl/tab-sdl.component";
import { DelegataireRoutingResolveService } from './service/delegataire/delegataire-routing-resolve.service';
var DelegatairesModule = /** @class */ (function () {
    function DelegatairesModule() {
    }
    DelegatairesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SdlComponent,
                DelegatairesComponent,
                DelegataireComponent,
                UpdSdlComponent,
                UpdDelegataireComponent,
                DetailSdlComponent,
                DetailDelegataireComponent,
                AddDelegataireComponent,
                AddSdlComponent,
                TabDelegataireComponent,
                AddTabDelegataireComponent,
                UpdTabDelegataireComponent,
                TabSdlComponent,
                AddTabSdlComponent,
                UpdTabSdlComponent,
            ],
            imports: [
                PagesModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                TranslateModule.forChild(),
                MaterialsModule,
                MatTabsModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: DelegataireComponent,
                        children: [
                            {
                                path: "add-tab-delegataire",
                                component: AddTabDelegataireComponent,
                            },
                            {
                                path: "upd-tab-delegataire",
                                component: UpdTabDelegataireComponent,
                            },
                            {
                                path: "add-tab-sdl",
                                component: AddTabSdlComponent,
                            },
                            {
                                path: "upd-tab-sdl",
                                component: UpdTabSdlComponent,
                            },
                            {
                                path: "delegataires",
                                component: DelegatairesComponent,
                            },
                            {
                                path: "sdl",
                                component: SdlComponent,
                            },
                            {
                                path: "upd-sdl",
                                component: UpdSdlComponent,
                            },
                            {
                                path: "upd-delegataire/:id",
                                component: UpdDelegataireComponent,
                                resolve: {
                                    delegataire: DelegataireRoutingResolveService,
                                },
                            },
                            {
                                path: "detail-sdl",
                                component: DetailSdlComponent,
                            },
                            {
                                path: "detail-delegataire/:id",
                                component: DetailDelegataireComponent,
                                resolve: {
                                    delegataire: DelegataireRoutingResolveService,
                                },
                            },
                            {
                                path: "add-sdl",
                                component: AddSdlComponent,
                            },
                            {
                                path: "add-delegataire",
                                component: AddDelegataireComponent,
                            },
                        ],
                    },
                ]),
            ],
            bootstrap: [TabDelegataireComponent, TabSdlComponent],
        })
    ], DelegatairesModule);
    return DelegatairesModule;
}());
export { DelegatairesModule };
//# sourceMappingURL=delegataire.Module.js.map