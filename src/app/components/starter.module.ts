import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StarterRoutingModule } from "./starter-routing.module";
import { StarterComponent } from "./home/starter.component";
import { ContentComponent } from "./home/content/content.component";
import { ControlSideBarComponent } from "./home/control-side-bar/control-side-bar.component";
import { MainSideBarComponent } from "./home/main-side-bar/main-side-bar.component";
import { NavBarComponent } from "./home/nav-bar/nav-bar.component";
import { FooterComponent } from "./home/footer/footer.component";
import { CalendarComponent } from "./widgets/calendar/calendar.component";
import { AreaComponent } from "./widgets/area/area.component";
import { PruebaComponent } from "./prueba/prueba.component";

@NgModule({
  declarations: [
    StarterComponent,
    ContentComponent,
    ControlSideBarComponent,
    MainSideBarComponent,
    NavBarComponent,
    FooterComponent,
    CalendarComponent,
    AreaComponent,
    PruebaComponent,
  ],
  imports: [CommonModule, StarterRoutingModule],
})
export class StarterModule {}
