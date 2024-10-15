import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    SharedModule
  ]
})
export class PublicModule { }
