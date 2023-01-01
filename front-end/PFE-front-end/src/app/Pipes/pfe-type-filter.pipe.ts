import { Pipe, PipeTransform } from '@angular/core';
import { Pfe } from '../Models/pfe';

@Pipe({
  name: 'pfeTypeFilter'
})
export class PfeTypeFilterPipe implements PipeTransform {

  transform(pfeList: Pfe[], typeInput: number): Pfe[] {
    if(typeInput == null){
      return pfeList;
    }
    return pfeList.filter(pfe => pfe.pfeType.id == typeInput );
  }

}
