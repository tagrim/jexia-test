import {Component, ViewEncapsulation} from '@angular/core';
import {SWGrabberService} from './swgrabber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public people: Array<object>;
  public isLoading: boolean;

  private count = 0;
  private next: string;
  private previous: string;

  constructor(
    private swGrabber: SWGrabberService
  ) {
    this.onPageChanged();
  }

  onPageChanged(link?: string) {
    this.isLoading = true;
    this.swGrabber.getPeople('', link).subscribe(({ results: people, next, previous, count }) => {
      Object.assign(this, { people, next, previous, count });
      this.isLoading = false;
    });
  }
}
