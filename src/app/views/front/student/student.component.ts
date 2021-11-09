import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dataStudent:any
  constructor(private ds:DataService,private router:Router) {
    this.ds.getAllstudents().subscribe(data=>this.dataStudent=data)
   }

  ngOnInit(): void {
  }

  Godetails(id:any){
    this.router.navigate(['student/'+id])
  }

}
