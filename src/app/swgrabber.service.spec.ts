import { TestBed } from '@angular/core/testing';

import { SWGrabberService } from './swgrabber.service';

describe('SWGrabberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SWGrabberService = TestBed.get(SWGrabberService);
    expect(service).toBeTruthy();
  });
});
