import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: `
    <code>
      Created using this guide by Todd Motto: 
      <a href="https://toddmotto.com/angular-2-forms-template-driven">
        Angular 2 form fundamentals: template-driven forms.
      </a>
    </code>
    <hr>
    <app-template-signup-form></app-template-signup-form>
  `,
})
export class TemplateFormComponent { }
