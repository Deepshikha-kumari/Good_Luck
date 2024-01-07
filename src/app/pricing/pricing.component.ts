import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private _apiService:ApiServiceService ,
    private _route:Router,
     private  route:ActivatedRoute,
     public zone: NgZone  ) { }


     lstproject:any;
     lstproject2:any[]=[];
     url:any;

     project:any;
     project2:any[]=[];
     url2:any;
  ngOnInit(): void {


    this._apiService.getpackage().subscribe(
      data3=>{
       // console.log("data",data3);
        this.url=JSON.stringify(data3.Url);
        // console.log(this.url);
        this.lstproject=JSON.stringify(data3.Data);
        console.log(this.lstproject);
         this.lstproject2=JSON.parse(this.lstproject);
         //console.log("uyuy"+this.bride)
      }
    );

    //services

    this._apiService.getservice().subscribe(
      data2=>{
       // console.log("data",data3);
        this.url2=JSON.stringify(data2.Url);
        // console.log(this.url);
        this.project=JSON.stringify(data2.Data);
        console.log(this.project);
         this.project2=JSON.parse(this.project);
         //console.log("uyuy"+this.bride)
      }
    );
    
  }

}
