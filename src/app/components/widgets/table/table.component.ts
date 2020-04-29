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
        },
        {
          title: "Last name",
          data: "lastName",
          orderable: true,
          visible: true,
        },
      ],
      language: {
        lengthMenu: "Mostrar _MENU_ filas por página",
        zeroRecords: "Nada ha sido encontrado",
        info: "Página _PAGE_ de _PAGES_",
        infoEmpty: "Sin información",
        infoFiltered: "(Filtrado de _MAX_ registros totales)",
        search: "",
        paginate:{previous: "<", next: ">", first: "primera", last: "ultima"},
        searchPlaceholder: "Buscar..."
      },
      autoWidth: true,
      responsive: true,
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
