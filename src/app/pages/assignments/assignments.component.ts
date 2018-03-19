import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.sass"]
})
export class AssignmentsComponent implements OnInit {
  assignments = [];
  constructor(public authService: AuthService) {}

  async ngOnInit() {
    this.assignments = await this.authService.getAuthAssignments();
  }
}
