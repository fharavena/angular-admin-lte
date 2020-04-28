import { ContentComponent } from './home/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './home/starter.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';
import { ErrorComponent } from './error/error.component';
import { PruebaComponent } from './prueba/prueba.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { CursoComponent } from './curso/curso.component';
import { ElementosLTEComponent } from './elementos-lte/elementos-lte.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'inicio',
        component: ContentComponent
      },
      {
        path: 'prueba',
        component: PruebaComponent
      },
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'curso',
        component: CursoComponent
      },
      {
        path: 'comida',
        component: CalendarComponent
      }
      ,
      {
        path: 'elementos',
        component: ElementosLTEComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      }
    ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
