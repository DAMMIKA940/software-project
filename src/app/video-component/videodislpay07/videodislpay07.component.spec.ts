import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videodislpay07Component } from './videodislpay07.component';

describe('Videodislpay07Component', () => {
  let component: Videodislpay07Component;
  let fixture: ComponentFixture<Videodislpay07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videodislpay07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videodislpay07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
