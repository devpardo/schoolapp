import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.sass"]
})
export class StaffComponent implements OnInit {
  teachers = [];
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.teachers = await this.authService.getAuthTeachers();
  }
}
