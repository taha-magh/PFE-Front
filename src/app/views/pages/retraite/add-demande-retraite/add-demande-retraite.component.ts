import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-demande-retraite',
  templateUrl: './add-demande-retraite.component.html',
  styleUrls: ['./add-demande-retraite.component.scss']
})
export class AddDemandeRetraiteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
		this.router.navigate(["pages/retraite/list-retraite"]);
	}
}
