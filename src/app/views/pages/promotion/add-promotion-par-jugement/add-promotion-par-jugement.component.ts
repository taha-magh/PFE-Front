import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-add-promotion-par-jugement',
  templateUrl: './add-promotion-par-jugement.component.html',
  styleUrls: ['./add-promotion-par-jugement.component.scss']
})
export class AddPromotionParJugementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EtapeDernier(): void {
		this.router.navigate(["pages/promotion/list-promotion"]);
	}
}
