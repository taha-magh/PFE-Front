import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {IStructureSdl} from '../models/structureSdl/structureSdl.model';
import {StructureSdlService} from '../service/structureSdl/structure-sdl.service';
@Component({
	selector: 'kt-add-structure-sdl',
	templateUrl: './add-structure-sdl.component.html',
	styleUrls: ['./add-structure-sdl.component.scss']
})
export class AddStructureSdlComponent implements OnInit {
	formDemandeSubmitted = false;
	structureSdlss: IStructureSdl;

	// GroupForm sdlForm
	structureSdlForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private structureSdlService: StructureSdlService,
		private translate: TranslateService
	) {}

	ngOnInit() {}

	Back(): void {
		this.router.navigate(['pages/parametrage/list-structure-sdl'])
	}

	addStructureSdl() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('structure sdl form', this.structureSdlForm.value);

		if (this.structureSdlForm.valid) {
			this.structureSdlss = {
				libelle: this.structureSdlForm.value.libelle,
				description: this.structureSdlForm.value.description,
			};

			this.structureSdlService.addStructureSdl(this.structureSdlss).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_structure_sdl', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/parametrage/list-structure-sdl']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add structure Sdl =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}





