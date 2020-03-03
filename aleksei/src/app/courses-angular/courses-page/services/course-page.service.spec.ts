import { TestBed } from '@angular/core/testing';

import { CoursePageService } from './course-page.service';

describe('CoursePageServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursePageService = TestBed.get(CoursePageService);
    expect(service).toBeTruthy();
  });

  it('should get array', () => {
    const service: CoursePageService = TestBed.get(CoursePageService);
    const spy = spyOnProperty(service, 'array', 'get').and.callThrough();
    service.array;
    expect(spy).toHaveBeenCalled();
  });
});
