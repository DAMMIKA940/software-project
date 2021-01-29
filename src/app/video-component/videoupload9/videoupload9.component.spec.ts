import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload9Component } from './videoupload9.component';

describe('Videoupload9Component', () => {
  let component: Videoupload9Component;
  let fixture: ComponentFixture<Videoupload9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
