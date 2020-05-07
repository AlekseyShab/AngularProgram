import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breadcrumbUrl'
})
export class BreadcrumbUrlPipe implements PipeTransform {

  transform(value: string): string {
    if(value === undefined){
      return value = null;
    }else{
      return value.split('?',)[0];
    }
  }

}
