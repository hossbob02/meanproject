import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  id:any
  dataStudent:any
  constructor(private aroute:ActivatedRoute,private ds:DataService) { 
    this.aroute.params.subscribe(data=>this.id=data.id)
  }

  ngOnInit(): void {
    this.ds.getOnestudent(this.id).subscribe(data=>this.dataStudent=data)

  }

}
