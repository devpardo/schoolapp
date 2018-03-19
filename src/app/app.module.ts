import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./pages/users/users.component";
import { ServicesModule } from "./services/services.module";
import { LoginComponent } from "./pages/login/login.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { OverviewComponent } from "./pages/overview/overview.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    DefaultComponent,
    AuthComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
