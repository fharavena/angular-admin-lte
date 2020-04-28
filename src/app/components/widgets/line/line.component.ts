import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
          label: "Digital Goods",
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
        },
        {
          label: "Electronics",
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
        }
  ];

  lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  lineChartOptions = {
    maintainAspectRatio : false,
    responsive : true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines : {
          display : false,
        }
      }],
      yAxes: [{
        gridLines : {
          display : false,
        }
      }]
    }
  };

  lineChartType = "line";

  constructor() { }

  ngOnInit(): void {
  }

}
