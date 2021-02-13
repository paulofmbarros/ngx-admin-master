import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DashboardDataModel } from '../models/dashboardDataModel';
import { DashboardModule } from 'app/pages/dashboard/dashboard.module';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  

constructor(private http: HttpClient) { }

url="https://localhost:44351/api/"

  dashboardata:DashboardDataModel

  getDashboardData(idNode:number):any{
    let data = {idNode:idNode.toString()};
    return this.http.get<any>(`${this.url}Node/GetNodeDashboardDataById`,{params:data})
    }

    turnOnOrOfDevice(idNode:number, type: any, on: boolean) {

      const headers: HttpHeaders = new HttpHeaders({
        
      });
      let params: HttpParams = new HttpParams();
      params = params.set('idNode', idNode.toString());
      params = params.set('type', type.toString());
      params = params.set('on', on.toString());
      // let data = {idNode:idNode, type:type.toString(), on:on};
      // console.log("data", data);
      return this.http.post<any>(`${this.url}Node/TurnOnOrOfDevice`,'', {params:params})
    }
}
