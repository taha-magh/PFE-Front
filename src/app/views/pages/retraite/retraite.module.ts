import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';
import { ListRetraiteComponent } from './list-retraite/list-retraite.component';
import { RetraiteComponent } from './retraite.component';
import { AddProlongementComponent } from './add-prolongement/add-prolongement.component';
import { AddDemandeRetraiteComponent } from './add-demande-retraite/add-demande-retraite.component';
import { ShowRetraiteComponent } from './show-retraite/show-retraite.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';



@NgModule({
  declarations: [RetraiteComponent, ListRetraiteComponent, AddProlongementComponent, AddDemandeRetraiteComponent, ShowRetraiteComponent, ListDemandesComponent],
  imports: [
    PagesModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: RetraiteComponent,
				children: [
					{
						path: "list-retraite",
						component: ListRetraiteComponent,
					},
					{
						path: "list-demandes",
						component: ListDemandesComponent,
					},
					{
						path: "add-prolongement",
						component: AddProlongementComponent,
					},
					{
						path: "show-retraite",
						component: ShowRetraiteComponent,
					},
					{
						path: "add-demande-retraite",
						component: AddDemandeRetraiteComponent,
					},
				],
			},
		]),
  ]
})
export class RetraiteModule { }
