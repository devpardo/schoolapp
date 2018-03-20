import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ServicesModule } from "./services/services.module";
import { LoginComponent } from "./pages/login/login.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { OverviewComponent } from "./pages/overview/overview.component";

import { AssignmentsComponent } from "./pages/assignments/assignments.component";
import { SubjectsComponent } from "./pages/subjects/subjects.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { DirectoryComponent } from "./pages/directory/directory.component";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { ClassmatesComponent } from "./pages/classmates/classmates.component";
import { StaffComponent } from "./pages/staff/staff.component";
import { SubjectComponent } from "./pages/subject/subject.component";
import { TestComponent } from "./pages/test/test.component";
import { MaterialModule } from "./material.module";

import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    AuthComponent,
    OverviewComponent,
    AssignmentsComponent,
    SubjectsComponent,
    ProfileComponent,
    DirectoryComponent,
    TeachersComponent,
    ClassmatesComponent,
    StaffComponent,
    SubjectComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
