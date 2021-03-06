import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchToken: string) {
    if (searchToken == null)
    searchToken = "";
    searchToken = searchToken.toLowerCase();

    return items.filter(elem => elem.title.toLowerCase().indexOf(searchToken) > -1);
  }
}
