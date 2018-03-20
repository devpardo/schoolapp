import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { SubjectComponent } from "../subject/subject.component";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.sass"]
})
export class SubjectsComponent implements OnInit {
  @ViewChild(SubjectComponent) private subjectComponent: SubjectComponent;
  subjects = [];
  assignments = [];
  tests = [];
  activities = [];
  loading = false;

  currentSubject;
  constructor(public authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.subjects = await this.authService.getAuthSubjects();
    this.subjects = this.subjects.map(subject => {
      subject.link = `/auth/subjects/${subject.subject}`;
      return subject;
    });
  }

  onSelectSubject(subject) {
    this.router.navigate([`auth/subjects`, subject.subject]);
  }
  async loadSubject(id) {
    this.loading = true;
    this.assignments = [];
    this.tests = [];
    this.activities = [];
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
  async onTabChange(event) {
    await this.loadSubject(event.tab.textLabel);
  }
}
