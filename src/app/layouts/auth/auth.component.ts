import { Router } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  isMobile = false;
  active = true;
  routes = [];
  constructor(
    public authService: AuthService,
    private router: Router,
    breakpointObserver: BreakpointObserver
  ) {
    const layoutChanges = breakpointObserver.observe(["(max-width: 599px)"]);
    layoutChanges.subscribe(({ matches }) => {
      this.isMobile = matches;
      if (matches) {
        this.active = !this.isMobile;
      }
    });
  }
  async ngOnInit() {
    this.routes = [
      {
        name: "Overview",
        link: "/auth/overview",
        icon: "dashboard"
      },
      {
        name: "Assignments",
        link: "/auth/assignments",
        icon: "assignments"
      },
      {
        name: "Subjects",
        link: "/auth/subjects",
        icon: "assignments"
      },
      {
        name: "Student Profile",
        link: "/auth/profile",
        icon: "face"
      },
      {
        name: "Teachers",
        link: "/auth/directory/teachers",
        icon: "school"
      },
      {
        name: "Classmates",
        link: "/auth/directory/classmates",
        icon: "people"
      },
      {
        name: "Staff",
        link: "/auth/directory/staff",
        icon: "school"
      }
    ];
    if (this.authService.auth.type === "p") {
      this.routes.push({
        name: "Reply Slips",
        link: "auth/slips",
        icon: "message"
      });
    }
  }

  onSelectChild(child) {
    this.authService.student = child;
    console.log(this.authService.student);
    this.router.navigate(["auth/overview"]);
  }

  get isParent() {
    return (
      this.authService.auth &&
      this.authService.auth.type === "p" &&
      this.authService.student &&
      this.authService.auth.children
    );
  }
}
