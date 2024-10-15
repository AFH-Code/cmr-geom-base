import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { ReportingComponent } from './general/reporting/reporting.component';
import { MesdocumentsComponent } from './documents/mesdocuments/mesdocuments.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'r',
        pathMatch: 'full'
      },
      {
        path: 'r', // child route path
        component: ReportingComponent, 
        data: { title: 'Home page' }
      },
      {
        path: 'documents', // child route path
        component: MesdocumentsComponent, 
        data: { title: 'Mes documents' }
      }
    ]
},
{ path: '',   redirectTo: '/dashboard/r', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
