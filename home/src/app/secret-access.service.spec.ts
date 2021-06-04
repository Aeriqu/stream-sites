import { TestBed } from '@angular/core/testing';

import { SecretAccessService } from './secret-access.service';

describe('SecretAccessService', () => {
  let service: SecretAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
