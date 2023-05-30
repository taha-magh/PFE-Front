import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking
import { Router } from "@angular/router";

@Component({
	selector: "kt-evenement",
	templateUrl: "./evenement.component.html",
	styleUrls: ["./evenement.component.scss"],
})
export class EvenementComponent implements OnInit {
	constructor(private router: Router) {}

	calendarOptions: CalendarOptions = {
		initialView: "dayGridMonth",
		events: [
			{ title: "event 1", date: "2022-09-01" },
			{ title: "event 2", date: "2022-09-15" },
		],
	};

	addEvenement(): void {
		this.router.navigate(["pages/juridique/add-evenement"]);
	}

	ngOnInit() {}
}
