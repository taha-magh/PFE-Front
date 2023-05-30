import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-imprimer-attestation-conge',
  templateUrl: './imprimer-attestation-conge.component.html',
  styleUrls: ['./imprimer-attestation-conge.component.scss']
})
export class ImprimerAttestationCongeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/conge/list-conge"]);
	}
}
