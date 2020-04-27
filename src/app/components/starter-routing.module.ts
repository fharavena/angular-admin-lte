import { ContentComponent } from './home/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './home/starter.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';
import { ErrorComponent } from './error/error.component';
import { PruebaComponent } from './prueba/prueba.component';


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
        path: 'comida',
        component: CalendarComponent
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
