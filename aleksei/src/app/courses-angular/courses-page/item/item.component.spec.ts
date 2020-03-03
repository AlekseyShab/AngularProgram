import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { DeleteBtnStubComponent, EditBtnStubComponent } from '../../testing/component-stub';
import { Component } from '@angular/core';

const SELECTORS = {
  deleteBtn: 'app-delete-btn'
}
@Component({
  template: `
    <app-item [info]='info' (deleteElement)="$event"></app-item>
  `
})
class TestHostComponent {
  info = {
    id: 4
  }
}


describe('ItemComponent with wrapper', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent,
        TestHostComponent,
        EditBtnStubComponent,
        DeleteBtnStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and get id from @Input', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItemComponent ', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let removeSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent,
        EditBtnStubComponent,
        DeleteBtnStubComponent
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
      id:3,
      title:'Angular',
      description:'',
      creationTime:'1h 20min',
      creationDate:'12 Nov 2011'
    };
    fixture.detectChanges();
    removeSpy = spyOn(component.deleteElement, 'emit');
    const el = fixture.nativeElement.querySelector(SELECTORS.deleteBtn);
    el.click();
    expect(removeSpy).toHaveBeenCalled()
  });
});
