import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload07Component } from './videoupload07.component';

describe('Videoupload07Component', () => {
  let component: Videoupload07Component;
  let fixture: ComponentFixture<Videoupload07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
