import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  // imports: [
  //   MatSidenavModule,
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatMenuModule,
  //   MatListModule,
  //   MatTabsModule
  // ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
