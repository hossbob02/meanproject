import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    
  ],
})
export class LayoutModule { }
