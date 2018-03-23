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

  assignmentsDate: Date = new Date();
  schedulesDate: Date = new Date();
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
    const date: Date = value;
    const year: string | number = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    return formattedDate;
  }
  getYesterday(value) {
    const date: Date = value;
    return new Date(date.setDate(date.getDate() + 1));
  }

  getTomorrow(value) {
    const date: Date = value;
    return new Date(date.setDate(date.getDate() - 1));
  }

  async onSelectAssignmentsYesterday() {
    await this.changeAssignmentByDate(this.getYesterday(this.assignmentsDate));
  }
  async onSelectAssignmentsTomorrow() {
    await this.changeAssignmentByDate(this.getTomorrow(this.assignmentsDate));
  }
  async onSelectSchedulesYesterday() {
    await this.changeSchedulesByDate(this.getYesterday(this.schedulesDate));
  }
  async onSelectSchedulesTomorrow() {
    await this.changeSchedulesByDate(this.getTomorrow(this.schedulesDate));
  }
  async changeAssignmentByDate(event) {
    this.assignmentsDate = event.value;
    const date = this.getFormattedDate(event.value);
    this.assignments = await this.authService.getAuthSubjectAssignmentsByDate(
      date
    );
  }
  async changeSchedulesByDate(event) {
    this.schedulesDate = event.value;
    const date = this.getFormattedDate(event.value);
    this.schedules = await this.authService.getAuthSchedulesByDate(date);
  }
}
