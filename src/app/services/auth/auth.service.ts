import { SubjectsService } from "./../data/subjects.service";
import { Router } from "@angular/router";
import { AssignmentsService } from "./../data/assignments.service";
import { SchedulesService } from "./../data/schedules.service";
import { UsersService } from "./../data/users.service";
import { Injectable } from "@angular/core";
import { ParentsService } from "../data/parents.service";
import { StudentsService } from "../data/students.service";
import { TeachersService } from "../data/teachers.service";

@Injectable()
export class AuthService {
  token: string;
  auth: any;

  student: any;
  constructor(
    private usersService: UsersService,
    private parentsService: ParentsService,
    private studentsService: StudentsService,
    private teachersService: TeachersService,
    private schedulesService: SchedulesService,
    private assignmentsService: AssignmentsService,
    private subjectsService: SubjectsService,
    private router: Router
  ) {
    this.getAuth();
  }

  async login(email: string, password: string) {
    const [user] = await fetch("http://stpcentral.net/userinfo", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: email,
        pass: password
      })
    }).then(res => res.json());
    console.log(user);
    if (!user) {
      throw new Error(`User with email: ${email} not found`);
    }
    console.log(user.ident);
    const token = btoa(JSON.stringify({ id: user.ident }));
    const info = btoa(JSON.stringify(user));
    console.log(token);
    localStorage.setItem("token", token);
    localStorage.setItem("info", info);
    this.getAuth();
    return user;
  }

  logout() {
    this.token = "";
    this.auth = null;
    localStorage.removeItem("token");
    this.router.navigate([""]);
  }

  async getAuth() {
    this.token = localStorage.getItem("token");
    const info = localStorage.getItem("info");
    if (this.token) {
      // const { id } = JSON.parse(atob(this.token));
      const user = JSON.parse(atob(info));
      this.auth = user;
      this.auth.image =
        "https://scontent.fmnl6-1.fna.fbcdn.net/v/t31.0-8/477597_10150879126872986_1945926737_o.jpg?oh=4609ecaed7f0e82ebc55d39b1c8e9cca&oe=5B448285";
      this.router.navigate(["auth/overview"]);
      await this.getRole();
    }
  }

  async getRole() {
    if (!this.auth) {
      throw new Error("No user logged in");
    }
    const roles = ["s", "p", "t"];
    if (!roles.includes(this.auth.type)) {
      throw new Error("Invalid Role");
    }
    if (this.auth.type === "p") {
      await this.getParentInfo();
    } else if (this.auth.type === "s") {
      console.log("STUDENT");
      const student = await this.getStudentInfo(this.auth.ident);
      this.student = student;
    }
  }

  async getParentInfo() {
    if (!this.auth.children) {
      return;
    }
    const [child] = this.auth.children;
    this.student = await this.getStudentInfo(child.id);
  }

  async getStudentInfo(id) {
    const [data] = await this.studentsService.getStudentInfo(id);
    return data;
    // const [
    //   assignments,
    //   schedules,
    //   subjects,
    //   { students: classmates }
    // ] = await Promise.all([
    //   this.assignmentsService.getCurrentDayAssignments(
    //     data.grade,
    //     data.section
    //   ),
    //   this.schedulesService.getCurrentDaySchedules(data.grade, data.section),
    //   this.subjectsService.getSubjects(data.grade, data.section),
    //   this.studentsService.getClassmates(data.grade, data.section)
    // ]);
    // const filteredClassmates = classmates.filter(student => student.id !== id);
    // return {
    //   ...data,
    //   schedules,
    //   assignments,
    //   subjects,
    //   classmates: filteredClassmates
    // };
  }

  async getAuthAssignments() {
    return this.assignmentsService.getCurrentDayAssignments(
      this.student.grade,
      this.student.section
    );
  }

  async getAuthCurrentDaySchedule() {
    return this.schedulesService.getCurrentDaySchedules(
      this.student.grade,
      this.student.section
    );
  }

  async getAuthSubjects() {
    return this.subjectsService.getSubjects(
      this.student.grade,
      this.student.section
    );
  }

  async getAuthClassmates() {
    const { students: classmates } = await this.studentsService.getClassmates(
      this.student.grade,
      this.student.section
    );
    return classmates.filter(student => student.id !== this.student.ident);
  }

  async getAuthSubjectAssignments(subject) {
    return this.subjectsService.getSubjectAssignments(
      subject,
      this.student.grade,
      this.student.section
    );
  }

  async getAuthTeachers() {
    return this.teachersService.getTeachers(
      this.student.grade,
      this.student.section
    );
  }
}
