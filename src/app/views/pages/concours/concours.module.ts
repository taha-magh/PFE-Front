import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcoursComponent } from './concours.component';
import { ListConcoursComponent } from './list-concours/list-concours.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';
import { AddConcoursComponent } from './add-concours/add-concours.component';
import { ShowConcoursComponent } from './show-concours/show-concours.component';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { EditConcoursComponent } from './edit-concours/edit-concours.component';



@NgModule({
  declarations: [ConcoursComponent, ListConcoursComponent, AddConcoursComponent, ShowConcoursComponent, EditConcoursComponent],
  imports: [
    PagesModule,
    MatStepperModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: ConcoursComponent,
				children: [
					{
						path: "list-concours",
						component: ListConcoursComponent,
					},
					{
						path: "add-concours",
						component: AddConcoursComponent,
					},
					{
						path: "show-concours",
						component: ShowConcoursComponent,
					},
					{
						path: "edit-concours",
						component: EditConcoursComponent,
					},
				],
			},
		]),
  ]
})
export class ConcoursModule { }
