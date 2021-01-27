import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './popUp.service';
import { Router } from '@angular/router';
const _this = this;
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
 

  capitals: string = '/assets/data/usa-state-capitals.geojson';

constructor(private http: HttpClient, private popupService: PopUpService, private router: Router ) { }


makeCapitalMarkers(map: L.Map): void {
  this.http.get(this.capitals).subscribe((res: any) => {

    for (const c of res.features) {
      const lat = c.geometry.coordinates[0];
      const lon = c.geometry.coordinates[1];
      const marker = L.marker([lon, lat]).addTo(map);
      marker.bindPopup(this.popupService.makeCapitalPopup(c)).on("popupopen", (a) => {
        var popUp = a.target.getPopup()
         popUp.getElement()
        .querySelector(".edit")
        .addEventListener("click", e => {
          this.seeDetails();
          });
      })
    }
  });
  
  
  
}

seeDetails() {
  this.router.navigate(['/pages/iot-dashboard'],{queryParams:{nodeId:1}})
  // /pages/iot-dashboard
}
}
