import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload8Component } from './videoupload8.component';

describe('Videoupload8Component', () => {
  let component: Videoupload8Component;
  let fixture: ComponentFixture<Videoupload8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
