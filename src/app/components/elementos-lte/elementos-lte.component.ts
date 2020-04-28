import { Component, OnInit } from "@angular/core";
import { RendercharService } from "src/app/services/rendercharjs/renderchar.service";

@Component({
  selector: "app-elementos-lte",
  templateUrl: "./elementos-lte.component.html",
  styleUrls: ["./elementos-lte.component.scss"],
})
export class ElementosLTEComponent implements OnInit {
  public areaChartMessage;
  public lineChartMessage;
  public barChartMessage;
  public donutChartMessage;
  public stackChartMessage;

  private dataset;
  private label;
  private datapie;
  private labelpie;
  private datasetline;

  constructor(private _renderChar: RendercharService) {}

  ngOnInit(): void {
    this.obtenerDatosRenderizarChar();
  }
  obtenerDatosRenderizarChar() {
    this.dataset = [
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
    this.datasetline = [
      {
        label: "Digital Goods",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill:false,
      },
      {
        label: "Electronics",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill:false,
      },
    ];

    this.label = ["January", "February", "March", "April", "May", "June"];

    this.labelpie = ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"];
    this.datapie = [
      {
        label: "Digital Goods",
        backgroundColor: [
          "#f56954",
          "#00a65a",
          "#f39c12",
          "#00c0ef",
          "#3c8dbc",
          "#d2d6de",
        ],
        borderColor: "rgba(60,141,188,0.8)",
        data: [700, 500, 400, 600, 300, 100],
      },
    ]

    this.areaChartMessage = this._renderChar.generar_area_chart(this.dataset, this.label);
    this.lineChartMessage = this._renderChar.generar_line_chart(this.datasetline, this.label);
    this.barChartMessage = this._renderChar.generar_bar_chart(this.dataset, this.label);
    this.donutChartMessage = this._renderChar.generar_donut_chart(this.datapie, this.labelpie);
    this.stackChartMessage = this._renderChar.generar_stack_chart(this.dataset, this.label);
  }
}
