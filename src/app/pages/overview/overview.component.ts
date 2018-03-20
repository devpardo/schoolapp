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
}
