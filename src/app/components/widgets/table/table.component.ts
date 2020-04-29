import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  private data = [
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
    {
      id: 860,
      firstName: "Superman",
      lastName: "Yoda",
    },
    {
      id: 870,
      firstName: "Foo",
      lastName: "Whateveryournameis",
    },
    {
      id: 590,
      firstName: "Toto",
      lastName: "Titi",
    },
  ];

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  constructor() {}

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      data: this.data,
      columns: [
        {
          title: "ID",
          data: "id",
          orderable: true,
          visible: true,
        },
        {
          title: "First name",
          data: "firstName",
          orderable: true,
          visible: true,
          class: "none",
        },
        {
          title: "Last name",
          data: "lastName",
          orderable: true,
          visible: true,
          class: "none",
        },
      ],
      responsive: true,
      // Declare the use of the extension in the dom parameter
      dom: "Bfrtip",
      // Configure the buttons
      buttons: [
        { extend: "colvis", text: "columna", className: "btn-tabla-opcion" },
        { extend: "copy", text: "copiar", className: "btn-tabla-opcion" },
        { extend: "print", text: "imprimir", className: "btn-tabla-opcion" },
        { extend: "csv", text: "csv", className: "btn-tabla-opcion" },
        { extend: "excel", text: "excel", className: "btn-tabla-opcion" },
        {
          text: "Some button",
          key: "1",
          action: function (e, dt, node, config) {
            alert("Button activated");
          },
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $("input", this.footer()).on("keyup change", function () {
          if (that.search() !== this["value"]) {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }
}
