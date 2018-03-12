import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetalsComponent } from './tour-detals.component';

describe('TourDetalsComponent', () => {
  let component: TourDetalsComponent;
  let fixture: ComponentFixture<TourDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
