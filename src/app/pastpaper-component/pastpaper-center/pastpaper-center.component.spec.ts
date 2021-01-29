import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpaperCenterComponent } from './pastpaper-center.component';

describe('PastpaperCenterComponent', () => {
  let component: PastpaperCenterComponent;
  let fixture: ComponentFixture<PastpaperCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastpaperCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpaperCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
