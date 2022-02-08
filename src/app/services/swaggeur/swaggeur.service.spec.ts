import { TestBed } from '@angular/core/testing';

import { SwaggeurService } from './swaggeur.service';

describe('SwaggeurService', () => {
  let service: SwaggeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwaggeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
