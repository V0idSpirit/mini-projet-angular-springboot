import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pfe } from '../Models/pfe';
import { PfeType } from '../Models/pfe-type';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  private apiBaseURL = "http://localhost:8888";
  constructor(private httpClient: HttpClient) { }

  getPfeTypeList():Observable<PfeType[]>{
    return this.httpClient.get<PfeType[]>(`${this.apiBaseURL}/pfe-types/all`);
  }
  getPfeList():Observable<Pfe[]>{
    return this.httpClient.get<Pfe[]>(`${this.apiBaseURL}/pfe/all`);
  }
  savePfe(pfe:any){
    return this.httpClient.post(`${this.apiBaseURL}/pfe/save`,pfe);
  }
  deletePfe(id:number){
    return this.httpClient.delete(`${this.apiBaseURL}/pfe/delete/${id}`,{responseType: 'text'});
  }
}
