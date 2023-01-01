import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pfe } from 'src/app/Models/pfe';
import { PfeType } from 'src/app/Models/pfe-type';
import { PfeService } from 'src/app/Service/pfe.service';

@Component({
  selector: 'add-pfe',
  templateUrl: './add-pfe.component.html',
  styleUrls: ['./add-pfe.component.css']
})
export class AddPfeComponent implements OnInit {
  title = 'PFE-front-end';
  pfeTypeList: PfeType[];
  pfeList: Pfe[];
  filteredList: Pfe[];
  searchTerm: string;
  typeInput: number;
  size: number;
  pfeToBeAdded:any = {"titre":"","id":""};


  constructor(private pfeService: PfeService, private route:Router) { }

  ngOnInit(): void {
    this.getPfeTypes()
    this.getPfes()
    this.getSize()
  }

  private getPfes(){
    this.pfeService.getPfeList().subscribe(data => {
      this.pfeList = data;
    });
  }

  public getSize(){
    this.pfeService.getPfeList().subscribe(data => {
      this.size = data.length;
    });
  }

  public getCount(pfeType){
    this.filteredList = this.pfeList.filter(pfe => pfe.pfeType.id == pfeType )
    return this.filteredList.length
  }

  private getPfeTypes(){
    this.pfeService.getPfeTypeList().subscribe(data => {
      this.pfeTypeList = data;
    });
  }


  public addPfe(){
    this.pfeService.savePfe(this.pfeToBeAdded).subscribe(
      {
          next: (data:any) => {this.route.navigateByUrl('/')}
      }
    )
  }

}
