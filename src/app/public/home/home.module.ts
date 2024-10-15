import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LadingpageComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ]
})
export class HomeModule { }
