import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PromotionComponent } from "./promotion.component";
import { ListPromotionComponent } from "./list-promotion/list-promotion.component";
import { PagesModule } from "../pages.module";
import { RouterModule } from "@angular/router";
import { AddPromotionParJugementComponent } from './add-promotion-par-jugement/add-promotion-par-jugement.component';
import { AddConcerneParPromotionComponent } from './add-concerne-par-promotion/add-concerne-par-promotion.component';

@NgModule({
	declarations: [PromotionComponent, ListPromotionComponent, AddPromotionParJugementComponent, AddConcerneParPromotionComponent],
	imports: [
		PagesModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: PromotionComponent,
				children: [
					{
						path: "list-promotion",
						component: ListPromotionComponent,
					},
					{
						path: "add-promotion-par-jugement",
						component: AddPromotionParJugementComponent,
					},
					{
						path: "add-concerne-par-promotion",
						component: AddConcerneParPromotionComponent,
					},
				],
			},
		]),
	],
})
export class PromotionModule {}
