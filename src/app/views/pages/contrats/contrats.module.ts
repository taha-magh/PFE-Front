import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { AddAvocatComponent } from "./add-avocat/add-avocat.component";
import { AvocatComponent } from "./avocat/avocat.component";
import { DetailleAvocatComponent } from "./detaille-avocat/detaille-avocat.component";
import { UpdAvocatComponent } from "./upd-avocat/upd-avocat.component";
import { ContratsComponent } from "./contrats.component";
import { NotaireComponent } from "./notaire/notaire.component";
import { AddNotaireComponent } from "./add-notaire/add-notaire.component";
import { UpdNotaireComponent } from "./upd-notaire/upd-notaire.component";
import { DetailleNotaireComponent } from "./detaille-notaire/detaille-notaire.component";
import { CommissaireJudiciaireComponent } from "./commissaire-judiciaire/commissaire-judiciaire.component";
import { AddCommissaireComponent } from "./add-commissaire/add-commissaire.component";
import { UpdCommissaireComponent } from "./upd-commissaire/upd-commissaire.component";
import { DetailleCommissaireComponent } from "./detaille-commissaire/detaille-commissaire.component";
import { ExpertComponent } from "./expert/expert.component";
import { AddExpertComponent } from "./add-expert/add-expert.component";
import { UpdExpertComponent } from "./upd-expert/upd-expert.component";
import { DetailleExpertComponent } from "./detaille-expert/detaille-expert.component";

@NgModule({
	declarations: [
		ContratsComponent,
		AddAvocatComponent,
		DetailleAvocatComponent,
		UpdAvocatComponent,
		AvocatComponent,
		NotaireComponent,
		AddNotaireComponent,
		UpdNotaireComponent,
		DetailleNotaireComponent,
		CommissaireJudiciaireComponent,
		AddCommissaireComponent,
		UpdCommissaireComponent,
		DetailleCommissaireComponent,
		ExpertComponent,
		AddExpertComponent,
		UpdExpertComponent,
		DetailleExpertComponent,
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
				component: ContratsComponent,
				children: [
					{
						path: "add-avocat",
						component: AddAvocatComponent,
					},
					{
						path: "add-expert",
						component: AddExpertComponent,
					},
					{
						path: "add-notaire",
						component: AddNotaireComponent,
					},
					{
						path: "add-commissaire",
						component: AddCommissaireComponent,
					},
					{
						path: "avocat",
						component: AvocatComponent,
					},
					{
						path: "upd-avocat",
						component: UpdAvocatComponent,
					},
					{
						path: "upd-expert",
						component: UpdExpertComponent,
					},
					{
						path: "upd-notaire",
						component: UpdNotaireComponent,
					},
					{
						path: "upd-commissaire",
						component: UpdCommissaireComponent,
					},
					{
						path: "detaille-avocat",
						component: DetailleAvocatComponent,
					},
					{
						path: "detaille-expert",
						component: DetailleExpertComponent,
					},
					{
						path: "detaille-notaire",
						component: DetailleNotaireComponent,
					},
					{
						path: "detaille-commissaire",
						component: DetailleCommissaireComponent,
					},
					{
						path: "notaire",
						component: NotaireComponent,
					},
					{
						path: "commissaire-judiciaire",
						component: CommissaireJudiciaireComponent,
					},
					{
						path: "expert",
						component: ExpertComponent,
					},
				],
			},
		]),
	],
})
export class ContratsModule {}
