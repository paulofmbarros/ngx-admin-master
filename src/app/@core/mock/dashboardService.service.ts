import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DashboardDataModel } from '../models/dashboardDataModel';
import { DashboardModule } from 'app/pages/dashboard/dashboard.module';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

constructor(private http: HttpClient) { }

url="https://localhost:44351/api/"

  dashboardata:DashboardDataModel=new DashboardDataModel();

  getDashboardData(idNode:number):DashboardDataModel{
    let data = {idNode:idNode.toString()};
    this.http.get<DashboardDataModel>(`${this.url}Node/GetNodeDashboardDataById`,{params:data}).subscribe((res:DashboardDataModel)=>{
        console.log("Entrou aqui")
        let emp=new DashboardDataModel();
        Object.assign(this.dashboardata,res)
        console.log(this.dashboardata.latitude)

      })

      return this.dashboardata;

      
    
  }
}
