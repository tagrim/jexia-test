import {Component, Input, OnInit} from '@angular/core';
import {SWGrabberService} from '../../swgrabber.service';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() public person: any;

  public planetName: string;
  public isLoading: boolean;

  constructor(
      private swGrabber: SWGrabberService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.swGrabber.getPlanet(this.person.homeworld).subscribe(({ name }) => {
      this.isLoading = false;
      this.planetName = name;
    });
  }

}
