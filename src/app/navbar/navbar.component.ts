import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() prevLink: string;
  @Input() nextLink: string;
  @Output() pageChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) { }

  ngOnInit() {
  }

  prevPage() {
    this.prevLink && this.pageChanged.emit(this.prevLink);
  }

  nextPage() {
    this.nextLink && this.pageChanged.emit(this.nextLink);
  }

}
