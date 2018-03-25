import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Custemvalidator } from './Custemvalidator.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  SignupForm=new FormGroup(
    {
       'UserName':new FormControl('', [Validators.required,Validators.email,Custemvalidator.Checkspace],
       [Custemvalidator.usernameMustbeUniqu]),
       'PassWord':new FormControl('',[Validators.required,Validators.maxLength(8)])
    }
  );

  get UsernameAccessor()
    {
      return this.SignupForm.get('UserName');
    }
}
