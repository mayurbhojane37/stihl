import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Battery1Component } from './battery1.component';

describe('Battery1Component', () => {
  let component: Battery1Component;
  let fixture: ComponentFixture<Battery1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Battery1Component]
    });
    fixture = TestBed.createComponent(Battery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
