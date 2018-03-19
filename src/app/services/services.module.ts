import { AssignmentsService } from "./data/assignments.service";
import { SchedulesService } from "./data/schedules.service";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./data/users.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/find";
import "rxjs/add/operator/merge";
import { ParentsService } from "./data/parents.service";
import { StudentsService } from "./data/students.service";
import { TeachersService } from "./data/teachers.service";
import { SubjectsService } from "./data/subjects.service";
import { TestsService } from "./data/tests.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    UsersService,
    AuthService,
    ParentsService,
    StudentsService,
    TeachersService,
    SchedulesService,
    AssignmentsService,
    SubjectsService,
    TestsService,
    AuthGuard
  ]
})
export class ServicesModule {}
