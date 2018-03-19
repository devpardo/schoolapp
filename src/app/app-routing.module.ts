import { SubjectComponent } from "./pages/subject/subject.component";
import { AuthGuard } from "./services/auth/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AssignmentsComponent } from "./pages/assignments/assignments.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { SubjectsComponent } from "./pages/subjects/subjects.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { DirectoryComponent } from "./pages/directory/directory.component";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { ClassmatesComponent } from "./pages/classmates/classmates.component";
import { StaffComponent } from "./pages/staff/staff.component";
import { TestComponent } from "./pages/test/test.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "auth",
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "overview",
        component: OverviewComponent
      },
      {
        path: "assignments",
        component: AssignmentsComponent
      },
      {
        path: "subjects",
        component: SubjectsComponent
      },
      {
        path: "subjects/:id",
        component: SubjectComponent
      },
      {
        path: "tests/:id",
        component: TestComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "directory/teachers",
        component: TeachersComponent
      },
      {
        path: "directory/classmates",
        component: ClassmatesComponent
      },
      {
        path: "directory/staff",
        component: StaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
