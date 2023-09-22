import { TestBed } from '@angular/core/testing';

import { VaccinationApiService } from './vaccination-api.service';

describe('VaccinationApiService', () => {
  let service: VaccinationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
