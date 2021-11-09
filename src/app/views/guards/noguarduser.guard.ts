import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class NoguarduserGuard implements CanActivateChild {
  constructor(private aus:AuthuserService,private router:Router){

  }


  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn()==false){
        resolve(true)
     
      
    }
    else{
      resolve(false)
    
      this.router.navigate(['/students'])
    }
    })

  }
  
}
