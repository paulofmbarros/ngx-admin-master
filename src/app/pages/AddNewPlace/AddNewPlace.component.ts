import { NewNodeModel } from './../../@core/models/newNodeModel';
import { AddNewNodeService } from './../../@core/mock/addNewNode.service';
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
  enableCheckBox: boolean = false;
  checkedElements: any[] = []

  checkboxesDataList = [
    {
      id: 'temperature',
      label: 'Temperature',
      isChecked: false
    },
    {
      id: 'soilhumidity',
      label: 'Soil Humidity',
      isChecked: true
    },
    {
      id: 'airhumidity',
      label: 'Air Humidity',
      isChecked: true
    },
    {
      id: 'windspeed',
      label: 'Wind Speed',
      isChecked: false
    },
    {
      id: 'winddirection',
      label: 'Wind Direction',
      isChecked: true
    }
  ]


  constructor(private formBuilder: FormBuilder, private addNewNodeService: AddNewNodeService) {
    this.novoLeitorForm = this.formBuilder.group({
      Rua: '',
      Zona: 0,
      Tipo: ''
    });

    this.novoTerrenoForm = this.formBuilder.group({
      Rua: '',
      NumeroDePorta: 0,
      CodigoPostal: '',
      Concelho: '',
      Distrito: '',
      IsRealSensor: '',

    });
  }

  ngOnInit() {
  }

  submeterLeitor(novoTerrenoForm: any) {
    let formdata = new NewNodeModel(novoTerrenoForm.Rua, novoTerrenoForm.NumeroDePorta,
      novoTerrenoForm.CodigoPostal, novoTerrenoForm.Concelho, novoTerrenoForm.Distrito, novoTerrenoForm.IsRealSensor==='sim'? true:false, this.checkedElements)
    this.addNewNodeService.AddNewNode(formdata).subscribe(res=>{
      console.log(res);
    })
  }

  changeSelection(event, id) {
    if (event) {
      this.checkedElements.push(id);
    }
    else {
      this.checkedElements = this.checkedElements.filter(ids => ids !== id)
    }
  }

  enableCheckBoxes(value) {

    if (value === 'sim' || value === 'yes') {
      this.enableCheckBox = true;
    }
    else {
      this.enableCheckBox = false;
    }
  }
}
