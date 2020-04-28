import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: 'app-donutchar',
  templateUrl: './donutchar.component.html',
  styleUrls: ['./donutchar.component.scss']
})
export class DonutcharComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
      data: [700, 500, 400, 600, 300, 100],
      backgroundColor: [
        "#f56954",
        "#00a65a",
        "#f39c12",
        "#00c0ef",
        "#3c8dbc",
        "#d2d6de",
      ],
    },
  ];

  lineChartLabels: Label[] = [
    "Chrome",
    "IE",
    "FireFox",
    "Safari",
    "Opera",
    "Navigator",
  ];

  lineChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  lineChartType = "doughnut";

  constructor() { }

  ngOnInit(): void {
  }

}
