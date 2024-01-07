import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  NgForm }  from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _apiService:ApiServiceService ,
    private _route:Router,
     private  route:ActivatedRoute,
     public zone: NgZone  ) { }

     message:any;
     errorMessage="PLease login to Fill the form ";
  ngOnInit(): void {
  //   if (!sessionStorage.getItem('token')) {
  //     alert(this.errorMessage);
  //     this._route.navigate(['/signin/login']);
  //  }
  }



  submitFormData(data:any){

  //   if (!sessionStorage.getItem('token')) {
  //     alert(this.errorMessage);
  //     this._route.navigate(['/signin/login']);
  //  }

  console.log(data);
   
    this._apiService.apiCall(data).subscribe((result:any)=>{
      console.warn("result",result);
     // sessionStorage.setItem('token', result.user.token);
      // localStorage.setItem('message', result.message);
     this.message=result.Message;
    //  return this.message;
   //  this.route.navigate(['leader']);
    //  console.log(this.message);
   alert("Reistration Succuess full ");
      //  console.log(this.code);
      //  this.greenalert=true;
      // console.log(result.user.token);
     
      this._route.navigate(['registration']).then(() => {
        window.location.reload();
      });;
  
    },(error:any) =>{
      console.log("i am error");
       console.log(error);
      this.message= error.error.message;
     console.log(this.message);
   
      //  this.redalert=true;
      // console.log(this.message);
      // this.route.navigate(['leader/autjsdfjs']);
      // return this.message;
    }
    
    
    
    )
      
  }

}
