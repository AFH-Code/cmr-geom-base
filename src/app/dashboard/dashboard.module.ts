import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GeneralModule } from './general/general.module';
import { DocumentsModule } from './documents/documents.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GeneralModule,
    DocumentsModule
  ]
})
export class DashboardModule { }
