import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';


import { LoginComponent } from './login/login.component'; // <---


@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    FormsModule
  ],
  declarations: [AuthComponent, LoginComponent]
})
export class NgxAuthModule { }
