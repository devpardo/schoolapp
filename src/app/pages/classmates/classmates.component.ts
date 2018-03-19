import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-classmates",
  templateUrl: "./classmates.component.html",
  styleUrls: ["./classmates.component.sass"]
})
export class ClassmatesComponent implements OnInit {
  classmates = [];
  constructor(public authService: AuthService) {}

  async ngOnInit() {
    this.classmates = await this.authService.getAuthClassmates();
  }
}
