import { Component, OnInit } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-barcharstack",
  templateUrl: "./barcharstack.component.html",
  styleUrls: ["./barcharstack.component.scss"],
})
export class BarcharstackComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
      label: "Digital Goods",
      backgroundColor: "rgba(60,141,188,0.9)",
      borderColor: "rgba(60,141,188,0.8)",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
    {
      label: "Electronics",
      backgroundColor: "rgba(210, 214, 222, 1)",
      borderColor: "rgba(210, 214, 222, 1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  lineChartType = "bar";

  constructor() {}

  ngOnInit(): void {}
}
