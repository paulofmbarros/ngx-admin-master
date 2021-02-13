import { DashboardServiceService } from './../../../@core/mock/dashboardService.service';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DashboardDataModel } from 'app/@core/models/dashboardDataModel';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {

  @Input() cityName:string

  currentDate= new Date();
constructor(private datePipe: DatePipe){
  
  }

  ngOnInit(){

  }
}
