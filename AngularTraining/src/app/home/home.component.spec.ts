/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StatusService } from '../shared/services/status.service';
import { AuthService } from '../shared/services/Auth.service';
import { Router } from '@angular/router';
import { CaptchaComponent } from '../captcha/captcha.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, CaptchaComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });

  it('getMsg() should return some result', () => {
    component.getMsg().subscribe((result => expect(result.length).toBeGreaterThan(0)));
  });

  it('statusService changes behaviour subject', inject( [StatusService], ( statusService: StatusService ) => {
    expect(statusService.setStatus('Welcome Adam!')).toBeUndefined(); 
}));

it('authService should change viaButton value to true', inject( [AuthService], ( authService: AuthService ) => {
  expect(authService.setViaButtonClick()).toBeUndefined(); 
}));

it(`should navigate to dashboard`, () => {
  component.login();
  expect (routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
});

it(`should execute promise method`, () => {
  expect (component.callPromise()).toBeUndefined();
});

it('Test the number of form controls formed', () => {
   const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
   const inputElements = formElement.querySelectorAll('input');
   expect(inputElements.length).toEqual(3);
});

it('Test the initial values of form controls', () => {
  const loginFormGroup = component.loginForm;
  const loginFormValues = {
    userName: '',
    password: ''
  }
  expect(loginFormGroup.value).toEqual(loginFormValues);
});

});
