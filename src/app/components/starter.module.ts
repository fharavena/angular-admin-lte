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
import { CursoComponent } from "./curso/curso.component";
import { RegistroComponent } from "./registro/registro.component";
import { ElementosLTEComponent } from "./elementos-lte/elementos-lte.component";
import { WeatherComponent } from "./weather/weather.component";
import { ChartsModule } from "ng2-charts";
import { LineComponent } from './widgets/line/line.component';
import { DonutcharComponent } from './widgets/donutchar/donutchar.component';
import { BarcharComponent } from './widgets/barchar/barchar.component';
import { BarcharstackComponent } from './widgets/barcharstack/barcharstack.component';

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
    CursoComponent,
    RegistroComponent,
    ElementosLTEComponent,
    WeatherComponent,
    LineComponent,
    DonutcharComponent,
    BarcharComponent,
    BarcharstackComponent,
  ],
  imports: [CommonModule, StarterRoutingModule, ChartsModule],
})
export class StarterModule {}
