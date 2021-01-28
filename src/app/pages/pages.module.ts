import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbMenuModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ErrorstableComponent } from './errorstable/errorstable.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbIconModule,
    ThemeModule,
    PagesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    ErrorstableComponent,
  ],
})
export class PagesModule {
}
