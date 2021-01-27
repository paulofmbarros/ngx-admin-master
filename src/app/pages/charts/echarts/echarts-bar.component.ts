import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { EchartsBarModel } from 'app/@core/mock/echarts-bar-model';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  @Input() type: string;
  echartsBarModel:EchartsBarModel;



  constructor(private theme: NbThemeService) {
  }

  ngOnInit(){
    this.echartsBarModel= new EchartsBarModel(this.type, [
      { value: this.type==='Temperature'? [Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25),Math.floor(Math.random() * (45-25) + 25)]  : 
                this.type==='Humidity'? [Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1), Math.floor(Math.random() * (25-1) + 1)] : 
                this.type==='Precipitation'? [(Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2), (Math.random() * (4-0) + 0).toFixed(2)] :  
                this.type==='Wind'? (Math.random() * (10-0) + 0).toFixed(2) : 0, name: 'Summer' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (13-1) + 1)  : this.type==='Humidity'? Math.floor(Math.random() * (99-80) + 80) : this.type==='Precipitation'? (Math.random() * (50-10) + 10).toFixed(2) : this.type==='Wind'? (Math.random() * (100-30) + 30).toFixed(2) : 0, name: 'Winter' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (25-12) + 12) : this.type==='Humidity'? Math.floor(Math.random() * (60-25) + 25) : this.type==='Precipitation'? (Math.random() * (10-2) + 2).toFixed(2) : this.type==='Wind'? (Math.random() * (20-0) + 0).toFixed(2) : 0, name: 'Springfield' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (13-1) + 1)  : this.type==='Humidity'? Math.floor(Math.random() * (88-50) + 50) : this.type==='Precipitation'? (Math.random() * (10-2) + 2).toFixed(2) :  this.type==='Wind'? (Math.random() * (30-0) + 0).toFixed(2) : 0, name: 'Autumn' },
    ])
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
