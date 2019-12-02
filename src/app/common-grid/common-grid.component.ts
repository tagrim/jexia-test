import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.scss']
})
export class CommonGridComponent implements OnInit {
  @Input() people: Array<any>;
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

}
