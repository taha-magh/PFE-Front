import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'kt-add-type-chevillard',
  templateUrl: './add-type-chevillard.component.html',
  styleUrls: ['./add-type-chevillard.component.scss']
})
export class AddTypeChevillardComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }
  back() {
		this.router.navigate(["pages/audiences/list-audiences"]);
	}
}
