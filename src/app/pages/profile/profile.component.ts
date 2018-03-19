import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/data/users.service";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UsersService,
    public authService: AuthService
  ) {}

  async ngOnInit() {}
}
