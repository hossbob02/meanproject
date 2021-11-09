import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailsRoutingModule } from './studentdetails-routing.module';
import { StudentdetailsComponent } from './studentdetails.component';


@NgModule({
  declarations: [
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    StudentdetailsRoutingModule
  ]
})
export class StudentdetailsModule { }
