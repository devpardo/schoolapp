import { OverviewComponent } from "./pages/overview/overview.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { UsersComponent } from "./pages/users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "overview",
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
