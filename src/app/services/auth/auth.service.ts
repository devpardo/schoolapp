import { UsersService } from "./../data/users.service";
import { Injectable } from "@angular/core";
import { ParentsService } from "../data/parents.service";
import { StudentsService } from "../data/students.service";
import { TeachersService } from "../data/teachers.service";

@Injectable()
export class AuthService {
  token: string;
  auth: any;
  constructor(
    private usersService: UsersService,
    private parentsService: ParentsService,
    private studentsService: StudentsService,
    private teachersService: TeachersService
  ) {
    this.getAuth();
  }

  async login(email: string, password: string) {
    const user = this.usersService.getUserByEmail(email);
    if (!user) {
      throw new Error(`User with email: ${email} not found`);
    }
    const token = btoa(JSON.stringify({ id: user.id }));
    localStorage.setItem("token", token);
    this.getAuth();
    return user;
  }

  logout() {
    this.token = "";
    this.auth = null;
    localStorage.removeItem("token");
  }

  async getAuth() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      const { id } = JSON.parse(atob(this.token));
      console.log(id);
      this.auth = this.usersService.getUser(id);
      this.auth.meta = await this.getRole();
    }
  }

  async getRole() {
    if (!this.auth) {
      throw new Error("No user logged in");
    }
    const roles = ["student", "parent", "teacher"];
    if (!roles.includes(this.auth.role)) {
      throw new Error("Invalid Role");
    }

    if (this.auth.role === "parent") {
      return this.studentsService.getStudent(this.auth.id);
    } else if (this.auth.role === "student") {
      return this.parentsService.getParent(this.auth.id);
    }
    // } else if (this.auth.role === "teacher") {
    //   //return this.studentsService.getTeacher(this.auth.id);
    // }
    // const roleActions = {
    //   student: this.studentsService.getStudent,
    //   parent: this.parentsService.getParent
    // };

    // const roleAction = roleActions[this.auth.role];
    // if (!roleAction) {
    //   throw new Error("Invalid Role");
    // }
    // return roleAction(this.auth.id);
  }
}
