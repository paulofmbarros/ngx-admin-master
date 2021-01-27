import { AfterViewInit, Component } from '@angular/core';
import { MarkerService } from 'app/@core/mock/marker.service';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Your Lands</nb-card-header>
      <nb-card-body>
        <!-- <div leaflet [leafletOptions]="options"></div> -->
        <div id="map"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent implements AfterViewInit {
 
  private map;
  constructor(private markerService: MarkerService) {
   
  }

  ngAfterViewInit():void {
    // var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);

  }

  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.399872, -8.224454 ],
      zoom: 7
    });
    this.tiles.addTo(this.map)
  }

 

}
