import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.sass"]
})
export class SubjectsComponent implements OnInit {
  subjects = [];
  constructor(public authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.subjects = await this.authService.getAuthSubjects();
  }

  onSelectSubject(subject) {
    this.router.navigate([`auth/subjects`, subject.subject]);
  }
}
