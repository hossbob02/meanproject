import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './allstudents.component';

const routes: Routes = [
  {path:'',component:AllstudentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllstudentsRoutingModule { }
