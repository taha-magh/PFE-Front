import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationContinueComponent } from './formation-continue.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { MatStepperModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ShowFormationComponent } from './show-formation/show-formation.component';


@NgModule({
  declarations: [FormationContinueComponent, ListeFormationComponent, AddFormationComponent, ShowFormationComponent],
  imports: [
		MatStepperModule,
		PagesModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: FormationContinueComponent,
				children: [
					{
						path: "liste-formation",
						component: ListeFormationComponent,
					},
					{
						path: "add-formation",
						component: AddFormationComponent,
					},
					{
						path: "show-formation",
						component: ShowFormationComponent,
					},
				],
			},
		]),
	],
})
export class FormationContinueModule { }
