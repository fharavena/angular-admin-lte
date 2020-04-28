import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendercharService {

  constructor() { }

  public generar_stack_chart(datos, etiqueta) {
    return {
      type: "bar",
      labels: etiqueta,
      datasets: datos,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }

  public generar_donut_chart(datos, etiqueta) {
    return {
      type: "doughnut",
      labels: etiqueta,
      datasets: datos,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }

  public generar_bar_chart(datos, etiqueta) {
    return {
      type: "bar",
      labels: etiqueta,
      datasets: datos,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }

  public generar_line_chart(datos, etiqueta) {
    return {
      type: "line",
      labels: etiqueta,
      datasets: datos,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }

  public generar_area_chart(datos, etiqueta) {
    return {
      type: "line",
      labels: etiqueta,
      datasets: datos,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }
}
