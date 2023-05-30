import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-edit-concours',
  templateUrl: './edit-concours.component.html',
  styleUrls: ['./edit-concours.component.scss']
})
export class EditConcoursComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/concours/list-concours"]);
	}
}