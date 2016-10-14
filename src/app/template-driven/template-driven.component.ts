import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    .ng-invalid {
        border: 1px solid red;
    }  
  `]
})
export class TemplateDrivenComponent {

  user = {
    username: 'Hieu',
    email: 'hieu@test.com',
    password: '123',
    gender: 'male'
  };

  genders = [
      'male',
      'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
