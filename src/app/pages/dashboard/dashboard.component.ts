import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
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
  };
  sprinklerCard: CardSettings = {
    title: 'Sprinkler',
    iconClass: 'fas fa-tint',
    type: 'success',
  };
  SecurityCameraCard: CardSettings = {
    title: 'Security Camera',
    iconClass: 'fas fa-video',
    type: 'info',
  };
  SensorsCard: CardSettings = {
    title: 'Sensors',
    iconClass: 'fas fa-broadcast-tower',
    type: 'warning',
  };

  temperatureCard: CardSettings = {
    title: 'Temperature',
    iconClass: 'fas fa-thermometer-three-quarters',
    type: 'primary',
  };
  humidityCard: CardSettings = {
    title: 'Humidity',
    iconClass: 'fas fa-tint',
    type: 'success',
  };
  precipitationCard: CardSettings = {
    title: 'Precipitation',
    iconClass: 'fas fa-umbrella',
    type: 'info',
  };
  windCard: CardSettings = {
    title: 'Wind',
    iconClass: 'fab fa-audible',
    type: 'warning',
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

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
        this.sensorsCards=this.sensorCardsByThemes[theme.name];
    });

    // this.solarService.getSolarData()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((data) => {
    //     this.solarValue = data;
    //   });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
