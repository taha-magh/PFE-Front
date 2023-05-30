import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-sanctions',
  templateUrl: './edit-sanctions.component.html',
  styleUrls: ['./edit-sanctions.component.scss']
})
export class EditSanctionsComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/personnel/show-personnel"]);
	}
}
