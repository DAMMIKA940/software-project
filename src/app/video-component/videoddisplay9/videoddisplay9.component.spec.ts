import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoddisplay9Component } from './videoddisplay9.component';

describe('Videoddisplay9Component', () => {
  let component: Videoddisplay9Component;
  let fixture: ComponentFixture<Videoddisplay9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoddisplay9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoddisplay9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
