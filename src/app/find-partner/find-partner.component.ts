import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-find-partner',
  templateUrl: './find-partner.component.html',
  styleUrls: ['./find-partner.component.css']
})
export class FindPartnerComponent implements OnInit {

  constructor(private _apiService:ApiServiceService ,
    private _route:Router,
     private  route:ActivatedRoute,
     public zone: NgZone ) { }

     url:any;
     lstproject:any;
     lstproject2:any;
     url2:any;
     url3:any;
   
     grrom:any;
     grrom2:any[]=[];
   urlget:any;
   urlget2:any;
   urlget3:any;
     bride:any;
     bride2:any[]=[];
  ngOnInit(): void {

    this._apiService.getDisplayuser().subscribe(
      data=>{
        console.log("data",data);
        this.url=JSON.stringify(data.Url);
        // console.log(this.url);
        this.lstproject=JSON.stringify(data.Data);
       console.log(this.lstproject);
         this.lstproject2=JSON.parse(this.lstproject);
        //  console.log("uyuy"+this.lstproject)
      }
    );









    //grro

this._apiService.getuserboy().subscribe(
  data1=>{
   // console.log("data",data1);
    this.url2=JSON.stringify(data1.Url);
    this.urlget2=this.url2.replace(/['"]+/g, '');
   // console.log(this.url2);
    this.grrom=JSON.stringify(data1.Data);
   // console.log(this.grrom);
     this.grrom2=JSON.parse(this.grrom);
    //  console.log("uyuy"+this.grrom)
  }
);

//bridr

this._apiService.getusergirl().subscribe(
  data3=>{
   // console.log("data",data3);
    this.url3=JSON.stringify(data3.Url);
    // console.log("jjjj"+this.url3);
    this.urlget3=this.url3.replace(/['"]+/g, '');
    //console.log("bride34"+this.urlget3);
    this.bride=JSON.stringify(data3.Data);
   // console.log(this.bride);
     this.bride2=JSON.parse(this.bride);
    // console.log("uyuy"+this.bride)
  }
);
  }

}
