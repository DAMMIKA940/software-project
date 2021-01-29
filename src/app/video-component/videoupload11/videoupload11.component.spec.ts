import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload11Component } from './videoupload11.component';

describe('Videoupload11Component', () => {
  let component: Videoupload11Component;
  let fixture: ComponentFixture<Videoupload11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
