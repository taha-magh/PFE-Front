import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "../pages.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialsModule } from "../utils/materials/materials.module";
import { RouterModule } from "@angular/router";

import { ListPeseesComponent } from "./list-pesees/list-pesees.component";
import { AddPeseeComponent } from "./add-pesee/add-pesee.component";
import { PeseeComponent } from "./pesee.component";
import { ShowPeseeComponent } from "./show-pesee/show-pesee.component";
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
	declarations: [
		AddPeseeComponent,
		PeseeComponent,
		ListPeseesComponent,
		ShowPeseeComponent,
	],
	imports: [
		PagesModule,
		CommonModule,
		MatStepperModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MaterialsModule,
		RouterModule.forChild([
			{
				path: "",
				component: PeseeComponent,
				children: [
					{
						path: "add-pesee",
						component: AddPeseeComponent,
					},
					{
						path: "list-pesees",
						component: ListPeseesComponent,
					},
					{
						path: "show-pesee",
						component: ShowPeseeComponent,
					},
				],
			},
		]),
	],
})
export class PeseeModule {}
