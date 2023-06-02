import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {ITypeIndicSdl} from '../models/typeIndicSdl/typeIndicSdl.model';
import {TypeIndicSdlService} from '../service/typeIndicSdl/type-indic-sdl.service';
@Component({
	selector: "kt-add-type-indicateur-sdl",
	templateUrl: "./add-type-indicateur-sdl.component.html",
	styleUrls: ["./add-type-indicateur-sdl.component.scss"],
})
export class AddTypeIndicateurSdlComponent implements OnInit {
	formDemandeSubmitted = false;
	typeIndicSdlServicess: ITypeIndicSdl;

	// GroupForm sdlForm
	typeIndicSdlForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private typeIndicSdlService: TypeIndicSdlService,
		private translate: TranslateService
	) {}

	ngOnInit() {}

	Back(): void {
		this.router.navigate(['pages/parametrage/list-type-indicateur-sdl'])
	}

	addTypeIndicSdl() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('type indicateur sdl form', this.typeIndicSdlForm.value);

		if (this.typeIndicSdlForm.valid) {
			this.typeIndicSdlServicess = {
				libelle: this.typeIndicSdlForm.value.libelle,
				description: this.typeIndicSdlForm.value.description,
			};

			this.typeIndicSdlService.addTypeIndicSdl(this.typeIndicSdlServicess).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_type_indicateur_sdl', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/parametrage/list-type-indicateur-sdl']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add type indicateur Sdl =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}



