import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  constructor(private as:AuthadminService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // if(this.as.LoggedIn()==true){
    //   return true
    // }
    // else{
    //   return false
    // }


    return new Promise((resolve,reject)=>{
      if(this.as.LoggedIn()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
      localStorage.removeItem('token')
      resolve(false)

    }
    })
   
  }
  
}
