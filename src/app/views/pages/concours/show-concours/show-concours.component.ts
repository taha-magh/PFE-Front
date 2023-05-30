import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-show-concours',
  templateUrl: './show-concours.component.html',
  styleUrls: ['./show-concours.component.scss']
})
export class ShowConcoursComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  back(): void {
		this.router.navigate(["pages/concours/list-concours"]);
	}
}
