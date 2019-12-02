import {Component, ViewEncapsulation} from '@angular/core';
import {SWGrabberService} from "./swgrabber.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public people: Array<Object>;
  public page: number = 1;

  private count: number = 0;
  private next: string;
  private prev: string;

  constructor(
    private _SwGrabber: SWGrabberService
  ) {
    this._SwGrabber.getPeople().subscribe(({ results: people, next, prev, count }) => {
      Object.assign(this, { people, next, prev, count });
      console.log(this.people);
    });
  }
}
