import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCustomerHttpHandleError } from './service-customer-http-handle-error';

describe('ServiceCustomerHttpHandleError', () => {
  let component: ServiceCustomerHttpHandleError;
  let fixture: ComponentFixture<ServiceCustomerHttpHandleError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCustomerHttpHandleError],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCustomerHttpHandleError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
