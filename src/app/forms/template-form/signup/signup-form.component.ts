import { Component } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'app-signup-form',
  template: `
    <form novalidate  (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div class="form-group"
          [ngClass]="{'has-danger': (
            ( userName.errors?.required || userName.errors?.minlength ) && userName.touched
          )}">
        <label for="name">Full name</label>
        <input
          id="name" name="name"
          type="text" class="form-control"
          #userName="ngModel" ngModel required autocomplete="off" autofocus minlength="2"
          [ngClass]="{'form-control-danger': (
            ( userName.errors?.required || userName.errors?.minlength ) && userName.touched
          )}"
          placeholder="Full name">
        <div *ngIf="userName.errors?.required && userName.touched" class="form-control-feedback">
          Name is required
        </div>
        <div *ngIf="userName.errors?.minlength && userName.touched" class="form-control-feedback">
          Minimum of 2 characters
        </div>
      </div>
      <div ngModelGroup="account" #userAccount="ngModelGroup">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            id="email" name="email"
            type="email" class="form-control"
            ngModel required autocomplete="off"
            placeholder="Your email address">
        </div>
        <div class="form-group">
          <label for="name">Confirm address</label>
          <input
            id="confirm" name="confirm"
            type="email" class="form-control"
            ngModel required autocomplete="off"
            placeholder="Confirm your email address">
        </div>        
        <div *ngIf="userAccount.invalid && userAccount.touched" class="error">
          Both emails are required
        </div>
      </div>
      <div>
        <button
          class="btn btn-block"
          [ngClass]="{
            'btn-success': !f.invalid,
            'btn-outline-success': f.invalid
          }"
          [disabled]="f.invalid"
          type="submit">
          Sign up
        </button>
      </div>
    </form>
    <div class="py-3">
      <pre>f.value: {{ f.value | json }}</pre>
    </div>
  `
})
export class SignupFormComponent {

  public user: User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };

  public onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log('value', value);
    console.log('valid', valid);
  }

  constructor() {
  }
}
