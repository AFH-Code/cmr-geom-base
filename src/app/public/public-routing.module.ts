import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LadingpageComponent } from './home/ladingpage/ladingpage.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  {
      path: 'public',
      component: HomeComponent, // this is the component with the <router-outlet> in the template
      children: [
        {
          path: '',
          redirectTo: 'h',
          pathMatch: 'full'
        },
        {
          path: 'h', // child route path
          component: LadingpageComponent, 
          data: { title: 'Home page' }
        },
        {
          path: 'login', // child route path
          component: LoginComponent, 
          data: { title: 'Login page' }
        },
        {
          path: 'signup', // child route path
          component: SignupComponent, 
          data: { title: 'Sign up page' }
        }
      ]
  },
  { path: '',   redirectTo: '/public/h', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
