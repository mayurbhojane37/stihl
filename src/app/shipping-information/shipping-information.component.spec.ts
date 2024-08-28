import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInformationComponent } from './shipping-information.component';

describe('ShippingInformationComponent', () => {
  let component: ShippingInformationComponent;
  let fixture: ComponentFixture<ShippingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingInformationComponent]
    });
    fixture = TestBed.createComponent(ShippingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
