import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private data=[
    {
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    },
    {
      "id": 870,
      "firstName": "Foo",
      "lastName": "Whateveryournameis"
    },
    {
      "id": 590,
      "firstName": "Toto",
      "lastName": "Titi"
    },
  ];
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      data: this.data,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

}
