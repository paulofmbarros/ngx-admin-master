import { DashboardServiceService } from 'app/@core/mock/dashboardService.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="turnOnOrOfDevice(title)" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on:boolean;
  idNode:number;

  ngOnInit(){

  }

  constructor(private dashservice:DashboardServiceService, private route:ActivatedRoute){

  }

  turnOnOrOfDevice(type){
    this.on=!this.on;
    console.log("ENTROU AQUI CARALHO")
    console.log("type", this.title);
    this.route.queryParams.subscribe(params => {
      this.idNode = params['nodeId'];
  });
    this.dashservice.turnOnOrOfDevice(this.idNode, type, this.on).subscribe(response=>{
      console.log("Escrito")
    })
  }
}
