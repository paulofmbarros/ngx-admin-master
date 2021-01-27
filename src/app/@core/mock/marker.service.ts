import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  capitals: string = '/assets/data/usa-state-capitals.geojson';

constructor(private http: HttpClient) { }


makeCapitalMarkers(map: L.Map): void {
  console.log("Entrou aqui")
  this.http.get(this.capitals).subscribe((res: any) => {
    console.log("Entrou aqui")

    for (const c of res.features) {
      const lat = c.geometry.coordinates[0];
      const lon = c.geometry.coordinates[1];
      const marker = L.marker([lon, lat]).addTo(map);
    }
  });
  
}
}
