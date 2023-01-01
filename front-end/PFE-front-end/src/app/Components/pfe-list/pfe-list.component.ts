import { Component, OnInit } from '@angular/core';
import { Pfe } from 'src/app/Models/pfe';
import { Route, Router } from '@angular/router';
import { PfeType } from 'src/app/Models/pfe-type';
import { PfeService } from 'src/app/Service/pfe.service';

@Component({
  selector: 'app-pfe-list',
  templateUrl: './pfe-list.component.html',
  styleUrls: ['./pfe-list.component.css']
})
export class PfeListComponent implements OnInit {

  title = 'PFE-front-end';
  pfeTypeList: PfeType[];
  pfeList: Pfe[];
  filteredList: Pfe[];
  searchTerm: string;
  typeInput: number;
  size: number;

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

  deletePfe(id: number) {
    this.pfeService.deletePfe(id).subscribe(
      data => {
        alert(data);
        location.reload();
      }
    )
  }

}
