import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewCourrierComponent } from '../new-courrier/new-courrier.component';

@Component({
  selector: 'kt-list-courriers',
  templateUrl: './list-courriers.component.html',
  styleUrls: ['./list-courriers.component.scss']
})
export class ListCourriersComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialog,) { }

  ngOnInit() {
  }

  new() {
		this.dialogRef.open(NewCourrierComponent);
	}
}
