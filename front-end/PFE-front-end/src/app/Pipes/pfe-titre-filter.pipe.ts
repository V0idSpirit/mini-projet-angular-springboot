import { Pipe, PipeTransform } from '@angular/core';
import { Pfe } from '../Models/pfe';

@Pipe({
  name: 'pfeTitreFilter'
})
export class PfeTitreFilterPipe implements PipeTransform {

  transform(pfeList: Pfe[], searchTerm: string): Pfe[] {
    if(searchTerm == null || searchTerm === ""){
      return pfeList;
    }
    return pfeList.filter(pfe => pfe.titre.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
