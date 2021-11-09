import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.addstudent(data).subscribe(response=>{
      // console.log(response)

      this.route.navigate(['/admin/allstudents'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })
  }

}
