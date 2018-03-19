import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.sass"]
})
export class AuthComponent implements OnInit {
  active = true;
  constructor(public authService: AuthService) {}
  ngOnInit() {}

  onToggleDrawer() {
    this.active = !this.active;
  }
}
