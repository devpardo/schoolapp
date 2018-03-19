import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { SubjectsService } from "../../services/data/subjects.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.sass"]
})
export class SubjectComponent implements OnInit {
  assignments = [];
  constructor(
    private authService: AuthService,
    private subjectService: SubjectsService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.assignments = await this.authService.getAuthSubjectAssignments(
        params.id
      );
    });
  }
}
