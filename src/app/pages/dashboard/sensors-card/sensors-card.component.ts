import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sensors-card',
  styleUrls: ['./sensors-card.component.scss'],
  template: `
    <nb-card (click)="openChartsTab()">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
      </div>
    </nb-card>
  `,
})
export class SensorsCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  /**
   *
   */
  constructor(private router: Router ) {
    
  }

  openChartsTab(){
    console.log(this.title)
    this.router.navigate(['/pages/charts/echarts'],{queryParams:{tab:this.title, nodeId:1}});
  }
}
