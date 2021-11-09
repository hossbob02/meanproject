import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails.component';

const routes: Routes = [
  {path:'',component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentdetailsRoutingModule { }
