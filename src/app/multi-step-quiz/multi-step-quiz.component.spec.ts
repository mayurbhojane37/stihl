import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepQuizComponent } from './multi-step-quiz.component';

describe('MultiStepQuizComponent', () => {
  let component: MultiStepQuizComponent;
  let fixture: ComponentFixture<MultiStepQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiStepQuizComponent]
    });
    fixture = TestBed.createComponent(MultiStepQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
