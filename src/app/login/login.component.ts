import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _apiService:ApiServiceService ,
    private _route:Router,
     private  route:ActivatedRoute,
     public zone: NgZone  ) { }

  ngOnInit(): void {
  }

  message:any;

  submitFormData(data:any){


    console.log("data",data);
    this._apiService.apiCall3(data).subscribe((result:any)=>{
      console.log("result",result);
      sessionStorage.setItem('token', result.Message);
      sessionStorage.setItem('status', result.Status);
      sessionStorage.setItem('name', result.name);
      //sessionStorage.setItem('token', result.user.token);
      // localStorage.setItem('message', result.message);
     this.message=result.Message;
     alert(this.message);
     //alert(result.Status);
    //  return this.message;
    if (sessionStorage.getItem('status')=='1') {
      this._route.navigate(['registration'])
  .then(() => {
    window.location.reload();
  });

     
    }
     console.log(this.message);
   // this.message;
     //  console.log(this.code);
     //  this.greenalert=true;
      // console.log(result.user.token);
     
  
  
    },(error:any) =>{
      console.log("i am error");
       console.log(error);
      this.message= error.error.message;
     console.log(this.message);
   
      // this.redalert=true;
      // console.log(this.message);
      // this.route.navigate(['leader/autjsdfjs']);
      // return this.message;
    }
    
    
    
    )
      
  }


}
