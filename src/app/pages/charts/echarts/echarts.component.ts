import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent implements OnInit {

  /**
   *
   */
  tab:String;
  
  constructor(private route: ActivatedRoute ) {
    
  }
  ngOnInit(){
    this.tab=this.route.snapshot.queryParamMap.get('tab');
  }
}
