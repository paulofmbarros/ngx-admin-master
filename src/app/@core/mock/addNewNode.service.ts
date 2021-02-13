import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewNodeModel } from '../models/newNodeModel';

@Injectable({
  providedIn: 'root'
})
export class AddNewNodeService {

  url = "https://localhost:44351/api/"
  constructor(private http: HttpClient) { }

  AddNewNode(formdata: NewNodeModel) {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    console.log(JSON.stringify(formdata))
    
    console.log("chegou aqui")
    return this.http.post<any>(`${this.url}Node/AddNewNode`, JSON.stringify(formdata),config)
  }

}
