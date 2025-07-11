import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { ISuiviSdl } from "../models/sdl/tab-sdl.model";
import { TabSdlService } from "../service/tab-sdl/tab-sdl.service";
import { Location } from '@angular/common';
import {TypeIndicSdlService} from '../../parametrages-sdl-delegataire/service/typeIndicSdl/type-indic-sdl.service';
import {HttpResponse} from '@angular/common/http';
import {ITypeIndicSdl} from '../../parametrages-sdl-delegataire/models/typeIndicSdl/typeIndicSdl.model';

@Component({
	selector: 'kt-add-tab-sdl',
	templateUrl: './add-tab-sdl.component.html',
	styleUrls: ['./add-tab-sdl.component.scss'],
})
export class AddTabSdlComponent implements OnInit {
	formDemandeSubmitted = false;
	suiviSdls: ISuiviSdl;
	tabTypeIndicateurSdls?: ITypeIndicSdl[] | null;


	// GroupForm suiviSdlForm
	suiviSdlForm = this.fb.group({
		objet: [''],
		typeIndicateur: [''],
		nom: [''],
		description: [''],
		dateValeur: ['', Validators.required],
		valeurContractuel: ['', Validators.required],
		valeurConstate: [''],

		// isCommuneInformed: [''],
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private suiviSdlService: TabSdlService,
		private translate: TranslateService,
		private typeIndicSdlService: TypeIndicSdlService,
		private  location: Location
	) {}

	ngOnInit() {
		// get list of types affaire
		this.typeIndicSdlService.query({ size: 1000 }).subscribe({
			next: (res: HttpResponse<ITypeIndicSdl[]>) => {
				this.tabTypeIndicateurSdls =  res.body;
			},
			error: () => { },
		});
	}
	Back(): void {
		this.location.back();
	}

	addSuiviSdl() {
		this.formDemandeSubmitted = true;
		console.log('form submit !');
		console.log('suivi-sdl form', this.suiviSdlForm.value);

		if (this.suiviSdlForm.valid) {
			this.suiviSdls = {
				typeIndicateur: this.suiviSdlForm.value.typeIndicateur,
				nom: this.suiviSdlForm.value.nom,
				description: this.suiviSdlForm.value.description,
				dateValeur: this.suiviSdlForm.value.dateValeur,
				valeurContractuel: this.suiviSdlForm.value.valeurContractuel,
				valeurConstate: this.suiviSdlForm.value.valeurConstate,
			};

			this.suiviSdlService.addSuiviSdl(this.suiviSdls).subscribe((res) => {
				if (res.ok) {
					localStorage.setItem('id_suiv_sdl', res.body.id.toString());

					Swal.fire({
						position: 'center',
						icon: 'success',
						title: this.translate.instant(
							'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
						),
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						this.location.back();
						//this.router.navigate(['pages/delegataire/tab-sdl' ]);
						// localStorage.setItem("curentStep", JSON.stringify(1));
					});
				}
				console.log('res add suivi-sdl =========>', res);
			});
		}
		// localStorage.setItem("curentStep", JSON.stringify(0));
	}
}



// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import { FormBuilder, Validators } from "@angular/forms";
// import { TranslateService } from "@ngx-translate/core";
// import Swal from "sweetalert2";
// import { ISuiviSdl } from '../models/sdl/tab-sdl.model';
// import { TabSdlService } from '../service/tab-sdl/tab-sdl.service';
// import { Location } from '@angular/common';
//
// @Component({
//     selector: 'kt-add-tab-sdl',
//     templateUrl: './add-tab-sdl.component.html',
//     styleUrls: ['./add-tab-sdl.component.scss'],
// })
// export class AddTabSdlComponent implements OnInit {
//     formDemandeSubmitted = false;
//     suiviSdls: ISuiviSdl;
//
//     // GroupForm suiviSdlForm
//     suiviSdlForm = this.fb.group({
//         objet: [''],
//         typeIndicateur: [''],
//         nom: [''],
// 		description: [''],
//         dateValeur: ['', Validators.required],
//         valeurContractuel: ['', Validators.required],
//         valeurConstate: [''],
//
//         // isCommuneInformed: [''],
//     });
//
//     constructor(
//         private router: Router,
//         private fb: FormBuilder,
//         private suiviSdlService: TabSdlService,
//         private translate: TranslateService,
//         private  location: Location
//     ) {}
//
//     ngOnInit() {}
//     Back(): void {
// 		this.location.back();
//     }
//
//     addSuiviSdl() {
//         this.formDemandeSubmitted = true;
//         console.log('form submit !');
//         console.log('suivi-sdl form', this.suiviSdlForm.value);
//
//         if (this.suiviSdlForm.valid) {
//             this.suiviSdls = {
//                 typeIndicateur: this.suiviSdlForm.value.typeIndicateur,
//                 nom: this.suiviSdlForm.value.nom,
// 				description: this.suiviSdlForm.value.description,
//                 dateValeur: this.suiviSdlForm.value.dateValeur,
//                 valeurContractuel: this.suiviSdlForm.value.valeurContractuel,
//                 valeurConstate: this.suiviSdlForm.value.valeurConstate,
//             };
//
//             this.suiviSdlService.addSuiviSdl(this.suiviSdls).subscribe((res) => {
//                 if (res.ok) {
//                 localStorage.setItem('id_suiv_sdl', res.body.id.toString());
//
//                 Swal.fire({
//                         position: 'center',
//                         icon: 'success',
//                         title: this.translate.instant(
//                              'PAGES.GENERAL.MSG_SAVED_CONFIRMED'
//                         ),
//                         showConfirmButton: false,
//                         timer: 1500,
// 					}).then(() => {
// 					this.location.back();
//                         // localStorage.setItem("curentStep", JSON.stringify(1));
// 					});
//                 }
//                 console.log('res add suivi-sdl =========>', res);
// 			});
// 		}
// 		// localStorage.setItem("curentStep", JSON.stringify(0));
// 	}
// }
