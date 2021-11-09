import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css'],
})
export class FrontLayoutComponent implements OnInit {
  constructor(public au:AuthuserService,private router:Router) {
   
  }

  ngOnInit(): void {
    
  
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginuser'])
  }

}
