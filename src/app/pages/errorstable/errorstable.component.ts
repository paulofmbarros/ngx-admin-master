import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SmartTableData } from 'app/@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { CheckboxComponent } from 'app/@theme/components/checkbox/checkbox.component';

@Component({
  selector: 'ngx-errorstable',
  templateUrl: './errorstable.component.html',
  styleUrls: ['./errorstable.component.scss']
})
export class ErrorstableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      location: {
        title: 'Location',
        type: 'string',
      },
      dateRaised: {
        title: 'Date Raised',
        type: 'string',
      },
      errorDescription: {
        title: 'Error Description',
        type: 'string',
      },
      dateSolved: {
        title: 'Date Solved',
        type: 'string',
      },
      isSolved: {
        title: 'Solved',
        type: 'custom',
        filter:'true',
        width:'10px',
        renderComponent: CheckboxComponent
      },
    },
  };


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}



