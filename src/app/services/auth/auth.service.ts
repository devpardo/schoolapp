import { UsersService } from "./../data/users.service";
import { Injectable } from "@angular/core";
import { ParentsService } from "../data/parents.service";
import { StudentsService } from "../data/students.service";

@Injectable()
export class AuthService {
  token: string;
  auth: any;
  constructor(
    private usersService: UsersService,
    private parentService: ParentsService,
    private studentService: StudentsService
  ) {}

  login(email: string, password: string) {
    const subscription = this.usersService
      .getUserByEmail(email)

      .subscribe((user: any) => {
        if (!user) {
          throw new Error("User not found");
        }
        if (user.password !== password) {
          throw new Error("Invalid Password");
        }
        const token = btoa(JSON.stringify({ id: user.id }));
        localStorage.setItem("token", token);
        this.token = token;
        this.auth = user;
        if (this.auth.role === "parent") {
          this.parentService
            .getParent(this.auth.id)
            .subscribe((parent: any) => {
              if (!parent) {
                throw new Error("Parent Meta not found");
              }
              parent.students = [];
              this.studentService
                .getStudents(parent.children)
                .subscribe(student => {
                  parent.students.push(student);
                });
              console.log(parent);
            });
        }
      });
    subscription.unsubscribe();
  }

  logout() {
    this.token = "";
    this.auth = null;
    localStorage.removeItem("token");
  }
}
