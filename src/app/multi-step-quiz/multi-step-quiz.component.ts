import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-quiz',
  templateUrl: './multi-step-quiz.component.html',
  styleUrls: ['./multi-step-quiz.component.css']
})
export class MultiStepQuizComponent {
  myForm: FormGroup;
  step: number = 1;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        productType: ['', Validators.required],
        experienceLevel: ['', Validators.required],
        purpose: ['', Validators.required],
        areaSize: ['', Validators.required],
        budget: ['', Validators.required]
      })
    });
  }

  selectProduct(option: string) {
    switch (this.step) {
      case 1:
        this.myForm.get('userDetails.productType')?.setValue(option);
        break;
      case 2:
        this.myForm.get('userDetails.experienceLevel')?.setValue(option);
        break;
      case 3:
        this.myForm.get('userDetails.purpose')?.setValue(option);
        break;
      case 4:
        this.myForm.get('userDetails.areaSize')?.setValue(option);
        break;
      case 5:
        this.myForm.get('userDetails.budget')?.setValue(option);
        break;
      case 6:
        this.onSubmit(); // Automatically submit the form on the last step
        return;
    }
    this.goNext();
  }

  goNext() {
    if (this.step < 6) {
      this.step++;
    }
  }

  goBack() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('Form Submitted', this.myForm.value);
  }

  retakeQuiz() {
    this.step = 1;
    this.isSubmitted = false;
    this.myForm.reset();
  }
}
