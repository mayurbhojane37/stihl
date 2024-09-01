import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Battery2Component } from './battery2.component';

describe('Battery2Component', () => {
  let component: Battery2Component;
  let fixture: ComponentFixture<Battery2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Battery2Component]
    });
    fixture = TestBed.createComponent(Battery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
