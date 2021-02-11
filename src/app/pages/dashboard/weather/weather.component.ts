import { DashboardServiceService } from './../../../@core/mock/dashboardService.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardDataModel } from 'app/@core/models/dashboardDataModel';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {

  currentDate= new Date();
  dashboardata:DashboardDataModel=new DashboardDataModel();
constructor(private datePipe: DatePipe, private dashservice:DashboardServiceService ){
  
  }

  ngOnInit(){

    this.dashboardata=this.dashservice.getDashboardData(1);
  }
}
