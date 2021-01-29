import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoddisplay8Component } from './videoddisplay8.component';

describe('Videoddisplay8Component', () => {
  let component: Videoddisplay8Component;
  let fixture: ComponentFixture<Videoddisplay8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoddisplay8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoddisplay8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
