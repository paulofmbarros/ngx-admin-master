import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

constructor() { }

makeCapitalPopup(data: any): string {
  return `<div>Name: ${ data.properties["name"] }</div> 
          <div>State: ${ data.properties["state"] }</div>
          <button class="edit" type="button">See Details</button>
          `
}
}
