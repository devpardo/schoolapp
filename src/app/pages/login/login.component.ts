import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  credential = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.auth) {
      this.router.navigate(["auth/overview"]);
    }
  }

  onLogin() {
    this.authService.login(this.credential.email, this.credential.password);
  }
}
