import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-absence',
  templateUrl: './edit-absence.component.html',
  styleUrls: ['./edit-absence.component.scss']
})
export class EditAbsenceComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/personnel/show-personnel"]);
	}

  sanction(): void {
		this.router.navigate(["pages/personnel/appliquer-sanctions"]);
	}
}
