import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-appliquer-sanctions',
  templateUrl: './appliquer-sanctions.component.html',
  styleUrls: ['./appliquer-sanctions.component.scss']
})
export class AppliquerSanctionsComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/personnel/show-personnel"]);
	}
}
