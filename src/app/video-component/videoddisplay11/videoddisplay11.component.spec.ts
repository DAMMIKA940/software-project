import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoddisplay11Component } from './videoddisplay11.component';

describe('Videoddisplay11Component', () => {
  let component: Videoddisplay11Component;
  let fixture: ComponentFixture<Videoddisplay11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoddisplay11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoddisplay11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
