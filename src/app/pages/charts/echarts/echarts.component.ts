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
  constructor(private route: ActivatedRoute ) {
    
  }
  ngOnInit(){
    console.log("Entrou no on Init")
    var tab=this.route.snapshot.queryParamMap.get('tab');
    console.log(tab);
  }
}
