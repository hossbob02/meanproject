import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)


  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) { }



  getAllstudents(){
    return this.http.get(`${environment.urlBackend}`+'students/',{headers:this.headerall,params:this.params})
  }

  addstudent(profile:any){

    return this.http.post(environment.urlBackend+'addstudent/',profile,{headers:this.headerAdmin,params:this.params})

  }

  deletestudent(id:any){
    return this.http.delete(environment.urlBackend+'student/'+id,{headers:this.headerAdmin,params:this.params})

  }


  updateStudent(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'student/'+id,newprofile,{headers:this.headerAdmin,params:this.params})

  }


  getOnestudent(id:any){
    
    return this.http.get(environment.urlBackend+'student/'+id,{headers:this.headerall,params:this.params})
  }
}
