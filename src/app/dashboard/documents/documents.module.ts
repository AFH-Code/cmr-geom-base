import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MesdocumentsComponent } from './mesdocuments/mesdocuments.component';

@NgModule({
  declarations: [
    MesdocumentsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ]
})
export class DocumentsModule { }
