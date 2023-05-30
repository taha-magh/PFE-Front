import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'kt-edit-chevillard',
  templateUrl: './edit-chevillard.component.html',
  styleUrls: ['./edit-chevillard.component.scss']
})
export class EditChevillardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
		this.router.navigate(["pages/audiences/list-audiences"]);
	}
}
