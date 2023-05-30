import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListAudiencesComponent } from "./list-audiences/list-audiences.component";
import { AudiencesComponent } from "../audiences/audiences.component";

import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";

import { EditChevillardComponent } from "./edit-chevillard/edit-chevillard.component";
import { AddTypeChevillardComponent } from "./add-type-chevillard/add-type-chevillard.component";
import { SaisirInfoComponent } from "./saisir-info/saisir-info.component";
import { ListInfoComponent } from "./list-info/list-info.component";
import { EditInfoComponent } from "./edit-info/edit-info.component";
import { ListFactureComponent } from "./list-facture/list-facture.component";
import { AddFactureComponent } from "./add-facture/add-facture.component";
import { EditFactureComponent } from "./edit-facture/edit-facture.component";
import { ImprimerFactureComponent } from "./imprimer-facture/imprimer-facture.component";
import { CotationComponent } from "./cotation/cotation.component";
import { AddEspeceComponent } from "./add-espece/add-espece.component";
import { AddSousEspeceComponent } from "./add-sous-espece/add-sous-espece.component";
import { AddTarifsComponent } from "./add-tarifs/add-tarifs.component";
import { EditEspeceComponent } from "./edit-espece/edit-espece.component";
import { EditSousEspeceComponent } from "./edit-sous-espece/edit-sous-espece.component";
import { EditTarifsComponent } from "./edit-tarifs/edit-tarifs.component";
import { DetailInfosComponent } from "./detail-infos/detail-infos.component";
import { EditCotationComponent } from "./edit-cotation/edit-cotation.component";
import { ListCotationComponent } from "./list-cotation/list-cotation.component";
import { ListEspeceComponent } from "./list-espece/list-espece.component";
import { ListSousEspeceComponent } from "./list-sous-espece/list-sous-espece.component";
import { ListTarifsComponent } from "./list-tarifs/list-tarifs.component";

@NgModule({
	declarations: [
		EditTarifsComponent,
		EditSousEspeceComponent,
		EditEspeceComponent,
		AddTarifsComponent,
		AddSousEspeceComponent,
		AddEspeceComponent,
		ListTarifsComponent,
		ListSousEspeceComponent,
		ListEspeceComponent,
		DetailInfosComponent,
		ListAudiencesComponent,
		AudiencesComponent,
		AddTypeChevillardComponent,
		EditChevillardComponent,
		SaisirInfoComponent,
		ListInfoComponent,
		EditInfoComponent,
		ListFactureComponent,
		AddFactureComponent,
		EditFactureComponent,
		ImprimerFactureComponent,
		CotationComponent,
		ListCotationComponent,
		EditCotationComponent,
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
				component: AudiencesComponent,
				children: [
					{
						path: "list-audiences",
						component: ListAudiencesComponent,
					},
					{
						path: "add-type-chevillard",
						component: AddTypeChevillardComponent,
					},
					{
						path: "edit-chevillard",
						component: EditChevillardComponent,
					},
					{
						path: "saisir-info",
						component: SaisirInfoComponent,
					},
					{
						path: "list-info",
						component: ListInfoComponent,
					},
					{
						path: "edit-info",
						component: EditInfoComponent,
					},
					{
						path: "list-facture",
						component: ListFactureComponent,
					},
					{
						path: "add-facture",
						component: AddFactureComponent,
					},
					{
						path: "edit-facture",
						component: EditFactureComponent,
					},

					{
						path: "imprimer-facture",
						component: ImprimerFactureComponent,
					},

					{
						path: "cotation",
						component: CotationComponent,
					},

					{
						path: "list-cotation",
						component: ListCotationComponent,
					},
					{
						path: "edit-cotation",
						component: EditCotationComponent,
					},
					{
						path: "detail-infos",
						component: DetailInfosComponent,
					},
					{
						path: "list-espece",
						component: ListEspeceComponent,
					},
					{
						path: "list-sous-espece",
						component: ListSousEspeceComponent,
					},
					{
						path: "list-tarifs",
						component: ListTarifsComponent,
					},
					{
						path: "add-espece",
						component: AddEspeceComponent,
					},
					{
						path: "add-sous-espece",
						component: AddSousEspeceComponent,
					},
					{
						path: "add-tarifs",
						component: AddTarifsComponent,
					},

					{
						path: "edit-espece",
						component: EditEspeceComponent,
					},
					{
						path: "edit-sous-espece",
						component: EditSousEspeceComponent,
					},
					{
						path: "edit-tarifs",
						component: EditTarifsComponent,
					},
				],
			},
		]),
	],

	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AudiencesModule {}
