import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ItemStubComponent, LoadMoreStubComponent } from '../../testing/component-stub';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';

const SELECTORS = {
  item: 'app-item'
};

class CoursePageStubService {

  arrayOfCourses: CourseItem[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'something',
      creationTime: '1h 28min',
      creationDate: '9 Nov, 2018'
    },
    {
      id: 2,
      title: 'React',
      description: 'something',
      creationTime: '1h 28min',
      creationDate: '8 Nov, 2018'
    },
    {
      id: 3,
      title: 'Vue',
      description: 'something',
      creationTime: '2h 38min',
      creationDate: '19 Nov, 2018'
    }
  ];


  get courses(): CourseItem[] {
    return this.arrayOfCourses;
  }

}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ItemStubComponent,
        LoadMoreStubComponent
      ],
      providers: [
        {provide: CoursePageService, useClass: CoursePageStubService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check array from CoursePageService', () => {
    const itemList = fixture.nativeElement.querySelectorAll(SELECTORS.item);
    expect(itemList.length).toBe(3);
  });

  it('should DELETE Item from array', () => {
    component.deleteItemElement(1);
    expect(component.arrayOfCourses.length).toBe(2);
  });
});
