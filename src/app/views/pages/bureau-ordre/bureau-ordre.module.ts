import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BureauOrdreComponent } from "./bureau-ordre.component";
import { ListCourriersComponent } from "./list-courriers/list-courriers.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "../pages.module";
import { NewCourrierComponent } from './new-courrier/new-courrier.component';
import { MatDialogModule } from "@angular/material";

@NgModule({
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
export class BureauOrdreModule {}
