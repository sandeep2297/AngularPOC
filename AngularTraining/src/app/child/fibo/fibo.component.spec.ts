/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiboComponent } from './fibo.component';
import { ImpureFiboPipe } from 'src/app/shared/pipes/impureFibo.pipe';
import { PureFiboPipe } from 'src/app/shared/pipes/pureFibo.pipe';

describe('FiboComponent', () => {
  let component: FiboComponent;
  let fixture: ComponentFixture<FiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiboComponent, ImpureFiboPipe,
        PureFiboPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
