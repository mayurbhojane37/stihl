import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberSignComponent } from './mobile-number-sign.component';

describe('MobileNumberSignComponent', () => {
  let component: MobileNumberSignComponent;
  let fixture: ComponentFixture<MobileNumberSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNumberSignComponent]
    });
    fixture = TestBed.createComponent(MobileNumberSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
