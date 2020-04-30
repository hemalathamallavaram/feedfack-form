import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formBuilder: FormBuilder = new FormBuilder();
  feedbackForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(
    private _router: Router,
  ) { }
  validateEmail(controls) {
    const regExp = new RegExp(
      // tslint:disable-next-line: max-line-length
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validateEmail: true };
    }
  }
  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      company_name: new FormControl('', [Validators.required]),
      job_title: new FormControl('', [Validators.required]),
      year: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,this.validateEmail]),
      feedback: new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    this.isFormSubmitted = true;
    if(this.feedbackForm.valid){
      let data = Object.assign({}, this.feedbackForm.value);
      console.log(data);
      this._router.navigateByUrl(`thankyou`, data.company_name);

    }else{

    }
  }
}
