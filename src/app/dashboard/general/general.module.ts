import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReportingComponent } from './reporting/reporting.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    HomeComponent,
    ReportingComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class GeneralModule { }
