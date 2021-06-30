import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/Auth.service';
import { StatusService } from '../shared/services/status.service';
import { PasswordValidator } from '../shared/Validators/password.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  loginForm: any;
  captchaValue: string = '';
  loginError: boolean = false;
  disabled: boolean = true;

  constructor(private statusService: StatusService,
    private router: Router,
    private authService: AuthService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.callPromise();
    this.initLoginForm();
  }

  login() {
    if (this.captchaValue === this.loginForm.get('captcha').value) {
      this.statusService.setStatus('Welcome Adam!');
      this.authService.setViaButtonClick();
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }

  callPromise() {
    const promise = new Promise((resolve, reject) => {
      console.log('Text inside promise');
      resolve('Welcome to Home!');
    });

    console.log('Before calling then method on Promise');

    promise.then(message => console.log(message));
  }

  getMsg() {
    return this.statusService.getStatus();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), PasswordValidator]],
      captcha: [{ value: '', disabled: true }, Validators.required]
    })
  }

  // getUsername(): any {
  //   return this.loginForm.get('userName')?.value;
  // }

  captcha() {
    this.captchaValue = 'A9wS5b';
    this.disabled = false;
    const control = this.loginForm.get('captcha');
    control.enable();
  }

  captchaDisabled(): boolean {
    if (this.loginForm.get('userName').valid && this.loginForm.get('password').valid) {
      return false;
    }
    return true;
  }

  receiveData(value: boolean) {
    this.loginError = value;
  }


}
