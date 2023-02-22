import { TestBed } from '@angular/core/testing';

import { PartnerAccountService } from './partner-account.service';

describe('PartnerAccountService', () => {
  let service: PartnerAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
