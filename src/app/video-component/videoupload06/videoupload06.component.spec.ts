import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoupload06Component } from './videoupload06.component';

describe('Videoupload06Component', () => {
  let component: Videoupload06Component;
  let fixture: ComponentFixture<Videoupload06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videoupload06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoupload06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
