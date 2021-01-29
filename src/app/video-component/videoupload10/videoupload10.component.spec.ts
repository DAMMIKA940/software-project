import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload10Component } from './videoupload10.component';

describe('Videoupload10Component', () => {
  let component: Videoupload10Component;
  let fixture: ComponentFixture<Videoupload10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
