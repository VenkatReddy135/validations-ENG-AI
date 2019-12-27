import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Search'
})
export class DetailsPipe implements PipeTransform {

  transform(TitleName: any[], SearchTitle: String): any {
    if(!SearchTitle)
    return TitleName
    return TitleName.filter(SearchItem=>SearchItem.title.toUpperCase().indexOf(SearchTitle.toUpperCase())!=-1)
  }

}
