import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() keywordChanged: EventEmitter<string> = new EventEmitter<string>();

  public keyword: string;
  public modelChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.modelChanged.pipe(
        debounceTime(300),
        distinctUntilChanged()
    ).subscribe(keyword => this.keywordChanged.next(keyword));
  }

  ngOnInit() {
  }

  inputChanged(keyword: string) {
    this.modelChanged.next(keyword);
  }
}
