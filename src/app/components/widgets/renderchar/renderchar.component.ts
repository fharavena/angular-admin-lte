import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-renderchar',
  templateUrl: './renderchar.component.html',
  styleUrls: ['./renderchar.component.scss']
})
export class RendercharComponent implements OnInit {
  @Input() dataChar;

  constructor() { }

  ngOnInit(): void {
  }

}
