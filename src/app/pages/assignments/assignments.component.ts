import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.sass"]
})
export class AssignmentsComponent implements OnInit {
  assignments = [];
  constructor(public authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.assignments = await this.authService.getAuthAssignments();
  }

  onSelectSubject(subject) {
    this.router.navigate([`auth/subjects`, subject.subject]);
  }
}
