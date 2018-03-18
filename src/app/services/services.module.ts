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

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UsersService, AuthService, ParentsService, StudentsService]
})
export class ServicesModule {}
