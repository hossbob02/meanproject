import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageError:any
  constructor(private aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f:any){
    let data=f.value

    this.aus.register(data).subscribe(data=>{
        this.router.navigate(['/loginuser'])
      
     console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError="hjbgvehjbhvbsdhbv"})

  }

}
