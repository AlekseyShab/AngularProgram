import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSectionComponent } from './route-section.component';

describe('RouteSectionComponent', () => {
  let component: RouteSectionComponent;
  let fixture: ComponentFixture<RouteSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
