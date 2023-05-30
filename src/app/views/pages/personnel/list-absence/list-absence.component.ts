import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.scss']
})
export class ListAbsenceComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back() {
		//this.location.back();
		this.router.navigate(["pages/personnel/show-personnel"]);
	}

  add_absence() {
		this.router.navigate(["pages/personnel/add-absence"]);
	}
}
