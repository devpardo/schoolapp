import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./pages/users/users.component";
import { ServicesModule } from "./services/services.module";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  declarations: [AppComponent, UsersComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
