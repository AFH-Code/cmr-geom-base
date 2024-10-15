import { TestBed } from '@angular/core/testing';

import { LoaderhttpService } from './loaderhttp.service';

describe('LoaderhttpService', () => {
  let service: LoaderhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
