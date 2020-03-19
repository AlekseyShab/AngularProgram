import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseItem[]): any {
    const sortedByDate = value.sort((a:any, b:any) => b.creationDate - a.creationDate);
    return sortedByDate;
  }

}
