import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-concours',
  templateUrl: './add-concours.component.html',
  styleUrls: ['./add-concours.component.scss']
})
export class AddConcoursComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/concours/list-concours"]);
	}
}
