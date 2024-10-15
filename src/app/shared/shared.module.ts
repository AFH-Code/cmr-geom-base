import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
import { DashboardasideComponent } from './components/dashboardaside/dashboardaside.component';
import { DashboardfooterComponent } from './components/dashboardfooter/dashboardfooter.component';
import { HelperDependenciesModule } from './modules/helper-dependencies.module';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@NgModule({
  declarations: [
    DashboardheaderComponent,
    DashboardasideComponent,
    DashboardfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HelperDependenciesModule,
    NgxEchartsDirective,
  ],
  exports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      DashboardheaderComponent,
      DashboardasideComponent,
      DashboardfooterComponent,
      HelperDependenciesModule
  ],
  providers: [
    provideEcharts(),
  ]
})
export class SharedModule { }
