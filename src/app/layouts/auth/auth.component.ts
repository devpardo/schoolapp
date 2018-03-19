import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.sass"]
})
export class AuthComponent implements OnInit {
  active = true;

  routes = [];
  constructor(public authService: AuthService, private router: Router) {}
  async ngOnInit() {
    await this.authService.getParentInfo();
    this.routes = [
      {
        name: "Overview",
        link: "auth/overview"
      },
      {
        name: "Assignments",
        link: "auth/assignments"
      },
      {
        name: "Subjects",
        link: "auth/subjects"
      },
      {
        name: "Student Profile",
        link: "auth/profile"
      },
      {
        name: "Teachers",
        link: "auth/directory/teachers"
      },
      {
        name: "Classmates",
        link: "auth/directory/classmates"
      },
      {
        name: "Staff",
        link: "auth/directory/staff"
      }
    ];
  }

  onToggleDrawer() {
    this.active = !this.active;
  }

  onNavigateTo(route) {
    this.router.navigate([route.link]);
  }

  onSelectChild(child) {
    this.authService.student = child;
    console.log(this.authService.student);
    this.router.navigate(["auth/overview"]);
  }
}
