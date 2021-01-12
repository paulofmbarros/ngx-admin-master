import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-AddNewPlace',
  templateUrl: './AddNewPlace.component.html',
  styleUrls: ['./AddNewPlace.component.scss']
})
export class AddNewPlaceComponent implements OnInit {
  novoLeitorForm: FormGroup;
  novoTerrenoForm: FormGroup;



  constructor(private formBuilder: FormBuilder) { 
    this.novoLeitorForm = this.formBuilder.group({
      Rua: '',
      Zona:0,
      Tipo:''
    });

    this.novoTerrenoForm = this.formBuilder.group({
      Rua: '',
      NumeroDePorta:0,
      CodigoPostal:'',
      Concelho:'',
      Distrito:'',
      IsRealSensor:'',
      NumeroDeZonas:0,

    });
  }

  ngOnInit() {
  }

  submeterLeitor(novoLeitorForm:any){
    console.log("Entrou aqui")
    console.log(novoLeitorForm)
  }
}
