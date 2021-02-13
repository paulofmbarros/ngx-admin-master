import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DashboardServiceService } from 'app/@core/mock/dashboardService.service';
import { DashboardDataModel } from 'app/@core/models/dashboardDataModel';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  on: boolean;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {


  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
    on: true

  };
  sprinklerCard: CardSettings = {
    title: 'Sprinkler',
    iconClass: 'fas fa-tint',
    type: 'success',
    on: true
  };
  SecurityCameraCard: CardSettings = {
    title: 'Security Camera',
    iconClass: 'fas fa-video',
    type: 'info',
    on: true
  };
  SensorsCard: CardSettings = {
    title: 'Sensors',
    iconClass: 'fas fa-broadcast-tower',
    type: 'warning',
    on: true
  };

  temperatureCard: CardSettings = {
    title: 'Temperature',
    iconClass: 'fas fa-thermometer-three-quarters',
    type: 'primary',
    on: true
  };
  humidityCard: CardSettings = {
    title: 'Humidity',
    iconClass: 'fas fa-tint',
    type: 'success',
    on: true
  };
  precipitationCard: CardSettings = {
    title: 'Precipitation',
    iconClass: 'fas fa-umbrella',
    type: 'info',
    on: true
  };
  windCard: CardSettings = {
    title: 'Wind',
    iconClass: 'fab fa-audible',
    type: 'warning',
    on: true
  };

  statusCards: string;
  sensorsCards: string;


  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.sprinklerCard,
    this.SecurityCameraCard,
    this.SensorsCard,
  ];
  commonSensorsCardsSet: CardSettings[] = [
    this.temperatureCard,
    this.humidityCard,
    this.precipitationCard,
    this.windCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.lightCard,
          type: 'warning',

        },
        {
          ...this.sprinklerCard,
          type: 'primary',
        },
        {
          ...this.SecurityCameraCard,
          type: 'danger',
        },
        {
          ...this.SensorsCard,
          type: 'info',
        },
      ],
      dark: this.commonStatusCardsSet,
    };

  sensorCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
      default: this.commonSensorsCardsSet,
      cosmic: this.commonSensorsCardsSet,
      corporate: [
        {
          ...this.temperatureCard,
          type: 'warning',
        },
        {
          ...this.humidityCard,
          type: 'primary',
        },
        {
          ...this.precipitationCard,
          type: 'danger',
        },
        {
          ...this.windCard,
          type: 'info',
        },
      ],
      dark: this.commonSensorsCardsSet,
    };

  dashboardata: DashboardDataModel = new DashboardDataModel();

  constructor(private themeService: NbThemeService,
    private solarService: SolarData,
    private dashservice: DashboardServiceService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
        this.sensorsCards = this.sensorCardsByThemes[theme.name];
      });

    // this.solarService.getSolarData()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((data) => {
    //     this.solarValue = data;
    //   });
  }
  ngOnInit() {
    this.getDashboardData(1)

  }

  getDashboardData(idNode: number) {
    this.dashservice.getDashboardData(idNode).subscribe(data => {
      Object.assign(this.dashboardata, data)
      this.sprinklerCard.on = this.dashboardata.node.isSprinklerON;
      this.lightCard.on = this.dashboardata.node.isLightOn;
      this.SensorsCard.on = this.dashboardata.node.isRealSensor;
      this.SecurityCameraCard.on = this.dashboardata.node.isSecurityCameraOn;

    })





  }
  ngOnDestroy() {
    this.alive = false;
  }
}
