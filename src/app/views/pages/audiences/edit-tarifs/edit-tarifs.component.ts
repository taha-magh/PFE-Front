import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'kt-edit-tarifs',
  templateUrl: './edit-tarifs.component.html',
  styleUrls: ['./edit-tarifs.component.scss']
})
export class EditTarifsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(["pages/audiences/list-tarifs"]);
  }
}
