import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoddisplay10Component } from './videoddisplay10.component';

describe('Videoddisplay10Component', () => {
  let component: Videoddisplay10Component;
  let fixture: ComponentFixture<Videoddisplay10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoddisplay10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoddisplay10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
