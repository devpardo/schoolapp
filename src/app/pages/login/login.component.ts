import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

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

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login(this.credential.email, this.credential.password);
  }
}
