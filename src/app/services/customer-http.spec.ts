import { TestBed } from '@angular/core/testing';

import { CustomerHttp } from './customer-http';

describe('CustomerHttp', () => {
  let service: CustomerHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
