import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import { SignupFormComponent } from './template-form/signup/signup-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SignupFormComponent,
    TemplateFormComponent,
  ]
})
export class MyFormsModule { }
