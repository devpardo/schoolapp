import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit, Input } from "@angular/core";
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
  loading = false;
  constructor(
    private authService: AuthService,
    private subjectService: SubjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(
      async params => await this.loadSubject(params.id)
    );
  }
  onSelectTest(test) {
    this.router.navigate([`auth/tests`, test.id]);
  }

  async loadSubject(id) {
    this.loading = true;
    const [assignments, tests, activities] = await Promise.all([
      this.authService.getAuthSubjectAssignments(id),
      this.authService.getAuthSubjectTests(id),
      this.authService.getAuthSubjectActivites(id)
    ]);
    this.assignments = assignments;
    this.tests = tests;
    this.activities = this.activities;
    this.loading = false;
  }
}
