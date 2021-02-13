import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
}
