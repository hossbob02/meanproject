import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    FormsModule
    
    
  ]
})
export class AllstudentsModule { }
