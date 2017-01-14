import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveSignupFormComponent } from './reactive-form/reactive-signup-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateSignupFormComponent } from './template-form/template-signup-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ReactiveFormComponent,
    ReactiveSignupFormComponent,
    TemplateFormComponent,
    TemplateSignupFormComponent,
  ]
})
export class MyFormsModule { }
