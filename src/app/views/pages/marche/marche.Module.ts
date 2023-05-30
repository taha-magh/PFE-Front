import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { PagesModule } from "../pages.module";
import { MaterialsModule } from "../utils/materials/materials.module";
import { ListTypeEmbalageComponent } from "./list-type-embalage/list-type-embalage.component";
import { AddTypeEmbalageComponent } from "./add-type-embalage/add-type-embalage.component";
import { ModificationTypeEmbalageComponent } from "./modification-type-embalage/modification-type-embalage.component";
import { ModificationTypeTarifictionComponent } from "./modification-type-tarifiction/modification-type-tarifiction.component";
import { DetailTypeEmbalageComponent } from "./detail-type-embalage/detail-type-embalage.component";
import { DetailTypeHangarComponent } from "./detail-type-hangar/detail-type-hangar.component";
import { DetailTypeProduitComponent } from "./detail-type-produit/detail-type-produit.component";
import { DetailTypeTarifictionComponent } from "./detail-type-tarifiction/detail-type-tarifiction.component";
import { MarcheComponent } from "./marche.component";
import { ModificationTypeProduitComponent } from "./modification-type-produit/modification-type-produit.component";
import { ModificationTypeHangarComponent } from "./modification-type-hangar/modification-type-hangar.component";
import { ListTypeHangarComponent } from "./list-type-hangar/list-type-hangar.component";
import { ListTypeTarifictionComponent } from "./list-type-tarifiction/list-type-tarifiction.component";
import { ListTypeProduitComponent } from "./list-type-produit/list-type-produit.component";
import { AddTypeHangarComponent } from "./add-type-hangar/add-type-hangar.component";
import { AddTypeTarifictionComponent } from "./add-type-tarifiction/add-type-tarifiction.component";
import { AddTypeProduitComponent } from "./add-type-produit/add-type-produit.component";

@NgModule({
	declarations: [
		MarcheComponent,

		DetailTypeTarifictionComponent,
		DetailTypeProduitComponent,
		DetailTypeHangarComponent,
		DetailTypeEmbalageComponent,

		ModificationTypeTarifictionComponent,
		ModificationTypeProduitComponent,
		ModificationTypeHangarComponent,
		ModificationTypeEmbalageComponent,

		ListTypeEmbalageComponent,
		ListTypeHangarComponent,
		ListTypeTarifictionComponent,
		ListTypeProduitComponent,

		AddTypeHangarComponent,
		AddTypeTarifictionComponent,
		AddTypeProduitComponent,
		AddTypeEmbalageComponent,
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
				component: MarcheComponent,
				children: [
					{
						path: "detail-type-tarifiction",
						component: DetailTypeTarifictionComponent,
					},
					{
						path: "detail-type-embalage",
						component: DetailTypeEmbalageComponent,
					},
					{
						path: "detail-type-hangar",
						component: DetailTypeHangarComponent,
					},
					{
						path: "detail-type-produit",
						component: DetailTypeProduitComponent,
					},

					{
						path: "list-type-embalage",
						component: ListTypeEmbalageComponent,
					},
					{
						path: "list-type-hangar",
						component: ListTypeHangarComponent,
					},
					{
						path: "list-type-tarifiction",
						component: ListTypeTarifictionComponent,
					},
					{
						path: "list-type-produit",
						component: ListTypeProduitComponent,
					},

					{
						path: "modification-type-tarifiction",
						component: ModificationTypeTarifictionComponent,
					},
					{
						path: "modification-type-embalage",
						component: ModificationTypeEmbalageComponent,
					},
					{
						path: "modification-type-hangar",
						component: ModificationTypeHangarComponent,
					},
					{
						path: "modification-type-produit",
						component: ModificationTypeProduitComponent,
					},

					{
						path: "add-type-embalage",
						component: AddTypeEmbalageComponent,
					},
					{
						path: "add-type-hangar",
						component: AddTypeHangarComponent,
					},
					{
						path: "add-type-tarifiction",
						component: AddTypeTarifictionComponent,
					},
					{
						path: "add-type-produit",
						component: AddTypeProduitComponent,
					},
				],
			},
		]),
	],
})
export class MarcheModule {}
