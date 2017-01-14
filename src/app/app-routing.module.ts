import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component'
import { TemplateFormComponent } from './forms/template-form/template-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  {
    path: 'forms',
    children: [
      { path: '', redirectTo: 'template', pathMatch: 'full' },
      { path: 'reactive', component: ReactiveFormComponent },
      { path: 'template', component: TemplateFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
