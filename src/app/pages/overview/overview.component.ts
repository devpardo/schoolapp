import { AuthService } from "./../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.sass"]
})
export class OverviewComponent implements OnInit {
  auth;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
