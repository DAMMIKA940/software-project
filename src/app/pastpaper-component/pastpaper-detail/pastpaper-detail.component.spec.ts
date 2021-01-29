import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpaperDetailComponent } from './pastpaper-detail.component';

describe('PastpaperDetailComponent', () => {
  let component: PastpaperDetailComponent;
  let fixture: ComponentFixture<PastpaperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastpaperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
