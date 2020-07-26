import { TestBed } from '@angular/core/testing';

import { DayService } from './day.service';

describe('DayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayService = TestBed.inject(DayService);
    expect(service).toBeTruthy();
  });
});
