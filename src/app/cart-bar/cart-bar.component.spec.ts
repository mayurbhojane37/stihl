import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBarComponent } from './cart-bar.component';

describe('CartBarComponent', () => {
  let component: CartBarComponent;
  let fixture: ComponentFixture<CartBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartBarComponent]
    });
    fixture = TestBed.createComponent(CartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
