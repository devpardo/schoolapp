import { StudentsService } from "./../../services/data/students.service";
import { Component, OnInit } from "@angular/core";
import { TeachersService } from "../../services/data/teachers.service";
import { AuthService } from "../../services/auth/auth.service";
import { UsersService } from "../../services/data/users.service";

@Component({
  selector: "app-teachers",
  templateUrl: "./teachers.component.html",
  styleUrls: ["./teachers.component.sass"]
})
export class TeachersComponent implements OnInit {
  teachers: any = [];
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    public teachersService: TeachersService,
    public studentsService: StudentsService
  ) {}

  async ngOnInit() {
    this.teachers = this.authService.getAuthTeachers();
  }
}
