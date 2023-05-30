import * as tslib_1 from "tslib";
import { MaterialsModule } from '../utils/materials/materials.module';
import { AffairesComponent } from "./affaires.component";
import { CoreModule } from "../../../core/core.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TabSubventionComponent } from "./tab-subvention/tab-subvention.component";
import { TabProjetPartenariatComponent } from "./tab-projet-partenariat/tab-projet-partenariat.component";
import { TabLocauxComponent } from "./tab-locaux/tab-locaux.component";
import { TabConventionComponent } from './tab-convention/tab-convention.component';
import { TabRestaurationComponent } from './tab-restauration/tab-restauration.component';
import { TabHebergementComponent } from './tab-hebergement/tab-hebergement.component';
import { TabDocumentsComponent } from './tab-documents/tab-documents.component';
import { TabActivitesComponent } from './tab-activites/tab-activites.component';
import { TabImpressionComponent } from './tab-impression/tab-impression.component';
import { PagesModule } from '../pages.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMandatComponent } from './add-mandat/add-mandat.component';
import { ShowMandatComponent } from './show-mandat/show-mandat.component';
import { AddMembreComponent } from './add-membre/add-membre.component';
import { EditAssociationComponent } from './edit-association/edit-association.component';
import { EditMandatComponent } from './edit-mandat/edit-mandat.component';
import { EditMembreComponent } from './edit-membre/edit-membre.component';
import { ShowMembreComponent } from './show-membre/show-membre.component';
import { TabDiversComponent } from './tab-divers/tab-divers.component';
import { MandatFilterComponent } from './mandat-filter/mandat-filter.component';
import { ListAffaireComponent } from './list-affaire/list-affaire.component';
import { AddAffaireComponent } from './add-affaire/add-affaire.component';
import { ShowAssociationComponent } from './show-association/show-association.component';
var AffaireModule = /** @class */ (function () {
    function AffaireModule() {
    }
    AffaireModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AffairesComponent,
                AddAffaireComponent,
                ListAffaireComponent,
                ShowAssociationComponent,
                TabSubventionComponent,
                TabProjetPartenariatComponent,
                TabLocauxComponent,
                TabConventionComponent,
                TabRestaurationComponent,
                TabHebergementComponent,
                TabDocumentsComponent,
                TabActivitesComponent,
                TabImpressionComponent,
                DashboardComponent,
                AddMandatComponent,
                ShowMandatComponent,
                AddMembreComponent,
                EditAssociationComponent,
                EditMandatComponent,
                EditMembreComponent,
                ShowMembreComponent,
                TabDiversComponent,
                MandatFilterComponent
            ],
            entryComponents: [],
            imports: [
                PagesModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
                TranslateModule.forChild(),
                MaterialsModule,
                RouterModule.forChild([
                    {
                        path: "",
                        component: AffairesComponent,
                        children: [
                            {
                                path: "list-affaire",
                                component: ListAffaireComponent
                            },
                            {
                                path: "add-affaire",
                                component: AddAffaireComponent
                            },
                            {
                                path: "dashboard",
                                component: DashboardComponent
                            },
                            {
                                path: "edit-association/:id",
                                component: EditAssociationComponent
                            },
                            {
                                path: "show-affaire",
                                component: ShowAssociationComponent
                            },
                            {
                                path: "tab-subvention",
                                component: TabSubventionComponent
                            },
                            {
                                path: "tab-projet-partenariat",
                                component: TabSubventionComponent
                            },
                            {
                                path: "tab-locaux",
                                component: TabLocauxComponent
                            },
                            {
                                path: "tab-convention",
                                component: TabConventionComponent
                            },
                            {
                                path: "tab-restauration",
                                component: TabRestaurationComponent
                            },
                            {
                                path: "tab-hebergement",
                                component: TabHebergementComponent
                            },
                            {
                                path: "tab-activites",
                                component: TabActivitesComponent
                            },
                            {
                                path: "tab-documents",
                                component: TabDocumentsComponent
                            },
                            {
                                path: "tab-impression",
                                component: TabImpressionComponent
                            },
                            {
                                path: "tab-divers",
                                component: TabDiversComponent
                            },
                            {
                                path: "dashboard",
                                component: DashboardComponent,
                            },
                            {
                                path: "add-demande",
                                component: AddMandatComponent,
                            },
                            {
                                path: "edit-mandat/:id",
                                component: EditMandatComponent
                            },
                            {
                                path: "show-mandat/:id",
                                component: ShowMandatComponent,
                            },
                            {
                                path: "add-membre/:id",
                                component: AddMembreComponent,
                            },
                            {
                                path: "edit-membre/:id",
                                component: EditMembreComponent
                            },
                            {
                                path: "show-membre/:id",
                                component: ShowMembreComponent
                            },
                            {
                                path: "mandat-filter",
                                component: MandatFilterComponent,
                            },
                            {
                                path: "mandat-filter",
                                component: MandatFilterComponent,
                            }
                        ]
                    }
                ]),
            ]
        })
    ], AffaireModule);
    return AffaireModule;
}());
export { AffaireModule };
//# sourceMappingURL=affaires.module.js.map