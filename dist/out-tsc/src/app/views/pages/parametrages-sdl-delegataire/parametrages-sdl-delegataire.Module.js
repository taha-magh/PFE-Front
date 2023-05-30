import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStructureDelegataireComponent } from './list-structure-delegataire/list-structure-delegataire.component';
import { AddStructureDelegataireComponent } from './add-structure-delegataire/add-structure-delegataire.component';
import { UpdStructureDelegataireComponent } from './upd-structure-delegataire/upd-structure-delegataire.component';
import { ListStructureSdlComponent } from './list-structure-sdl/list-structure-sdl.component';
import { AddStructureSdlComponent } from './add-structure-sdl/add-structure-sdl.component';
import { UpdStructureSdlComponent } from './upd-structure-sdl/upd-structure-sdl.component';
import { ParametragesSdlDelegataireComponent } from './parametrages-sdl-delegataire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PagesModule } from '../pages.module';
import { MaterialsModule } from '../utils/materials/materials.module';
// TypeIndicateurDelegataire
import { ListTypeIndicateurDelegataireComponent } from './list-type-indicateur-delegataire/list-type-indicateur-delegataire.component';
import { AddTypeIndicateurDelegataireComponent } from './add-type-indicateur-delegataire/add-type-indicateur-delegataire.component';
import { UpdTypeIndicateurDelegataireComponent } from './upd-type-indicateur-delegataire/upd-type-indicateur-delegataire.component';
// TypeIndicateurSdl
import { ListTypeIndicateurSdlComponent } from './list-type-indicateur-sdl/list-type-indicateur-sdl.component';
import { AddTypeIndicateurSdlComponent } from './add-type-indicateur-sdl/add-type-indicateur-sdl.component';
import { UpdTypeIndicateurSdlComponent } from './upd-type-indicateur-sdl/upd-type-indicateur-sdl.component';
var ParametragesSdlDelegataireModule = /** @class */ (function () {
    function ParametragesSdlDelegataireModule() {
    }
    ParametragesSdlDelegataireModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ParametragesSdlDelegataireComponent,
                ListStructureDelegataireComponent,
                AddStructureDelegataireComponent,
                UpdStructureDelegataireComponent,
                ListStructureSdlComponent,
                AddStructureSdlComponent,
                UpdStructureSdlComponent,
                ListTypeIndicateurDelegataireComponent,
                AddTypeIndicateurDelegataireComponent,
                UpdTypeIndicateurDelegataireComponent,
                ListTypeIndicateurSdlComponent,
                AddTypeIndicateurSdlComponent,
                UpdTypeIndicateurSdlComponent,
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
                        component: ParametragesSdlDelegataireComponent,
                        children: [
                            {
                                path: 'list-structure-delegataire',
                                component: ListStructureDelegataireComponent,
                            },
                            {
                                path: 'add-structure-delegataire',
                                component: AddStructureDelegataireComponent,
                            },
                            {
                                path: 'upd-structure-delegataire',
                                component: UpdStructureDelegataireComponent,
                            },
                            {
                                path: 'list-structure-sdl',
                                component: ListStructureSdlComponent,
                            },
                            {
                                path: 'add-structure-sdl',
                                component: AddStructureSdlComponent,
                            },
                            {
                                path: 'upd-structure-sdl',
                                component: UpdStructureSdlComponent,
                            },
                            {
                                path: 'list-type-indicateur-delegataire',
                                component: ListTypeIndicateurDelegataireComponent,
                            },
                            {
                                path: 'add-type-indicateur-delegataire',
                                component: AddTypeIndicateurDelegataireComponent,
                            },
                            {
                                path: 'upd-type-indicateur-delegataire',
                                component: UpdTypeIndicateurDelegataireComponent,
                            },
                            {
                                path: 'list-type-indicateur-sdl',
                                component: ListTypeIndicateurSdlComponent,
                            },
                            {
                                path: 'add-type-indicateur-sdl',
                                component: AddTypeIndicateurSdlComponent,
                            },
                            {
                                path: 'upd-type-indicateur-sdl',
                                component: UpdTypeIndicateurSdlComponent,
                            },
                        ],
                    },
                ]),
            ],
        })
    ], ParametragesSdlDelegataireModule);
    return ParametragesSdlDelegataireModule;
}());
export { ParametragesSdlDelegataireModule };
//# sourceMappingURL=parametrages-sdl-delegataire.Module.js.map