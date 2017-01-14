import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormComponent } from './forms/template-form/template-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  {
    path: 'forms',
    children: [
      { path: '', redirectTo: 'template', pathMatch: 'full' },
      { path: 'template', component: TemplateFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
