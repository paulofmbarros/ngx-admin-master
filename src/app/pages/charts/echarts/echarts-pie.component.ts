import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { EchartsPieModel } from 'app/@core/mock/echarts-pie-model';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  echartsPiewModel:EchartsPieModel;
  @Input() type: string;


  constructor(private theme: NbThemeService) {
  }
  ngOnInit(){
    this.echartsPiewModel= new EchartsPieModel(this.type, [
      { value: this.type==='Temperature'? Math.floor(Math.random() * (45-25) + 25)  : this.type==='Humidity'? Math.floor(Math.random() * (25-1) + 1) : this.type==='Precipitation'? (Math.random() * (4-0) + 0).toFixed(2) :  this.type==='Wind'? (Math.random() * (10-0) + 0).toFixed(2) : 0, name: 'Summer' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (13-1) + 1)  : this.type==='Humidity'? Math.floor(Math.random() * (99-80) + 80) : this.type==='Precipitation'? (Math.random() * (50-10) + 10).toFixed(2) : this.type==='Wind'? (Math.random() * (100-30) + 30).toFixed(2) : 0, name: 'Winter' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (25-12) + 12) : this.type==='Humidity'? Math.floor(Math.random() * (60-25) + 25) : this.type==='Precipitation'? (Math.random() * (10-2) + 2).toFixed(2) : this.type==='Wind'? (Math.random() * (20-0) + 0).toFixed(2) : 0, name: 'Springfield' },
      { value: this.type==='Temperature'? Math.floor(Math.random() * (13-1) + 1)  : this.type==='Humidity'? Math.floor(Math.random() * (88-50) + 50) : this.type==='Precipitation'? (Math.random() * (10-2) + 2).toFixed(2) :  this.type==='Wind'? (Math.random() * (30-0) + 0).toFixed(2) : 0, name: 'Autumn' },
    ])
  }

  ngAfterViewInit() {
    console.log("Entrou no AfterViewInit");
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Summer', 'Winter', 'Springfield', 'Autumn'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.echartsPiewModel.name,
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.echartsPiewModel.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
