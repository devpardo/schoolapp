import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { SubjectsService } from "../../services/data/subjects.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.sass"]
})
export class SubjectComponent implements OnInit {
  assignments = [];

  tests = [];
  activities = [];
  constructor(
    private authService: AuthService,
    private subjectService: SubjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.assignments = await this.authService.getAuthSubjectAssignments(
        params.id
      );
      this.tests = await this.authService.getAuthSubjectTests(params.id);
      this.activities = await this.authService.getAuthSubjectActivites(
        params.id
      );
    });
  }
  onSelectTest(test) {
    this.router.navigate([`auth/tests`, test.id]);
  }
}
