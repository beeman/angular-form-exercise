import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: `
    <app-signup-form></app-signup-form>
  `,
  styles: []
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
