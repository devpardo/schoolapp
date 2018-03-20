import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { LayoutModule } from "@angular/cdk/layout";
import { MatCardModule } from "@angular/material/card";
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
    MatProgressSpinnerModule,
    MatDividerModule,
    MatGridListModule,
    LayoutModule,
    MatCardModule
  ]
})
export class MaterialModule {}
