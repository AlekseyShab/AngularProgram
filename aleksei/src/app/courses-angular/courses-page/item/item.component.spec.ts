import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { DeleteBtnStubComponent, EditBtnStubComponent } from '../../testing/component-stub';
import { HighlightBorderDirective } from '../directives/highlightborder.directive';
import { DurationPipe } from '../pipes/duration.pipe';

const SELECTORS = {
  deleteBtn: 'app-delete-btn'
};

describe('ItemComponent ', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let removeSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent,
        EditBtnStubComponent,
        DeleteBtnStubComponent,
        HighlightBorderDirective,
        DurationPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
  });

  it('should create and delete Item calling @Output', () => {
    component.info = {
      id: 3,
      title: 'Angular',
      description: '',
      durationTime: 30,
      creationDate: new Date("2016-06-03"),
      topRated: true,
    };
    fixture.detectChanges();
    removeSpy = spyOn(component.deleteElement, 'emit');
    const el = fixture.nativeElement.querySelector(SELECTORS.deleteBtn);
    el.click();
    expect(removeSpy).toHaveBeenCalled();
  });
});
