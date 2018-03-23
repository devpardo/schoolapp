import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.sass"]
})
export class OverviewComponent implements OnInit {
  assignments = [];
  schedules = [];
  constructor(public authService: AuthService, private router: Router) {}

  async ngOnInit() {
    await this.authService.getAuth();
    [this.assignments, this.schedules] = await Promise.all([
      this.authService.getAuthAssignments(),
      this.authService.getAuthCurrentDaySchedule()
    ]);
  }

  onSelectSubject(subject) {
    this.router.navigate([`auth/subjects`, subject.subject]);
  }

  getFormattedDate(value) {
    const date = value;
    const year: string | number = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    return formattedDate;
  }
  async changeAssignmentByDate(event) {
    console.log(event);
    const date = this.getFormattedDate(event.value);
    this.assignments = await this.authService.getAuthSubjectAssignmentsByDate(
      date
    );
  }
  async changeSchedulesByDate(event) {
    console.log(event);
    const date = this.getFormattedDate(event.value);
    this.schedules = await this.authService.getAuthSchedulesByDate(date);
  }
}
