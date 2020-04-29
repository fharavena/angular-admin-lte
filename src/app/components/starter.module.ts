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
import { PruebaComponent } from "./prueba/prueba.component";
import { CursoComponent } from "./curso/curso.component";
import { RegistroComponent } from "./registro/registro.component";
import { ElementosLTEComponent } from "./elementos-lte/elementos-lte.component";
import { ChartsModule } from "ng2-charts";
import { RendercharComponent } from "./widgets/renderchar/renderchar.component";
import { TableComponent } from "./widgets/table/table.component";
import { GalleryComponent } from "./widgets/gallery/gallery.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    StarterComponent,
    ContentComponent,
    ControlSideBarComponent,
    MainSideBarComponent,
    NavBarComponent,
    FooterComponent,
    CalendarComponent,
    PruebaComponent,
    CursoComponent,
    RegistroComponent,
    ElementosLTEComponent,
    RendercharComponent,
    TableComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    ChartsModule,
    FullCalendarModule,
    DataTablesModule,
  ],
})
export class StarterModule {}
