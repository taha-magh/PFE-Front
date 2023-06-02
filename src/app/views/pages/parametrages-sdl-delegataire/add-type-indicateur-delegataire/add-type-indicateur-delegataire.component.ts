import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import {ITypeIndicDelegataire} from '../models/typeIndicDelegataire/typeIndicDelegataire.model';
import {TypeIndicDelegataireService} from '../service/typeIndicDelegataire/type-indic-delegataire.service';
@Component({
	selector: "kt-add-type-indicateur-delegataire",
	templateUrl: "./add-type-indicateur-delegataire.component.html",
	styleUrls: ["./add-type-indicateur-delegataire.component.scss"],
})
export class AddTypeIndicateurDelegataireComponent implements OnInit {
	formDemandeSubmitted = false;
	typeIndicDelegataireServicess: ITypeIndicDelegataire;

	// GroupForm delegataireForm
	typeIndicDelegataireForm = this.fb.group({
		objet: [''],
		// isCommuneInformed: [''],
		libelle: [''],
		description: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private typeIndicDelegataireService: TypeIndicDelegataireService,
		private translate: TranslateService
	) {}

	ngOnInit() {}

	Back(): void {
		this.router.navigate(['pages/parametrage/list-type-indicateur-delegataire'])
	}

	addTypeIndicDelegataire() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('type indicateur delegataire form', this.typeIndicDelegataireForm.value);

		if (this.typeIndicDelegataireForm.valid) {
			this.typeIndicDelegataireServicess = {
				libelle: this.typeIndicDelegataireForm.value.libelle,
				description: this.typeIndicDelegataireForm.value.description,
			};

			this.typeIndicDelegataireService.addTypeIndicDelegataire(this.typeIndicDelegataireServicess).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_type_indicateur_delegataire', res.body.id.toString());
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.router.navigate(['pages/parametrage/list-type-indicateur-delegataire']);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add type indicateur Delegataire =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}

}








// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
//

// })
// export class AddTypeIndicateurDelegataireComponent implements OnInit {
// 	constructor(private router: Router) {}
//
// 	ngOnInit() {}
//
// 	RetourEmbalages(): void {
// 		this.router.navigate([
// 			"pages/parametrage/list-type-indicateur-delegataire",
// 		]);
// 	}
// }
