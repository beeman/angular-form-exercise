import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup-form',
  template: `
    <form novalidate (ngSubmit)="onSubmit()" [formGroup]="user">
      <div class="form-group"
          [ngClass]="{'has-danger': (
            ( user.get('name').hasError('required') || user.get('name').hasError('minlength') ) && user.get('name').touched
          )}">
        <label>Full name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          [ngClass]="{'form-control-danger': (
            ( user.get('name').hasError('required') || user.get('name').hasError('minlength') ) && user.get('name').touched
          )}"
          formControlName="name"
          autocomplete="off"
          placeholder="Your full name">
          <div *ngIf="user.get('name').hasError('required') && user.get('name').touched" class="form-control-feedback">
            Name is required
          </div>
          <div *ngIf="user.get('name').hasError('minlength') && user.get('name').touched" class="form-control-feedback">
            Minimum of 2 characters
          </div>
      </div>
      <div formGroupName="account">
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            formControlName="email"
            autocomplete="off"
            placeholder="Your email address">
        </div>
        <div class="form-group">
          <label>Confirm address</label>
          <input
            type="email"
            name="confirm"
            class="form-control"
            formControlName="confirm"
            autocomplete="off"
            placeholder="Confirm your email address">
        </div>
      </div>
      <button 
          class="btn btn-block"
          [ngClass]="{
            'btn-success': !user.invalid,
            'btn-outline-success': user.invalid
          }"
          [disabled]="user.invalid"
          type="submit">Sign up</button>
    </form>
  `
})
export class ReactiveSignupFormComponent implements OnInit {

  user: FormGroup;
  constructor(private fb: FormBuilder ) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(2) ]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log('value', this.user.value);
    console.log('valid', this.user.valid);
  }
}
