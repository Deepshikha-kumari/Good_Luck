import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _apiService:ApiServiceService ,
    private _route:Router,
     private  route:ActivatedRoute,
     public zone: NgZone  ) { }
    lstproject:any;
    lstproject2:any[]=[];

    lstproject1:any;
   lstproject21:any[]=[];
   // lstproject21:any;

  url:any;
  url2:any;
  url3:any;
  url6:any;
  url5:any;
  url7:any;
  url8:any;

  grrom:any;
  grrom2:any[]=[];

urlget:any;
urlget2:any;
urlget3:any;
urlget6:any;
urlget5:any;
urlget7:any;
urlget8:any;


  bride:any;
  bride2:any[]=[];
  url4:any;
  gal:any;
  urlget4:any;
  gal2:any;


  cupmale:any;
  cupmale2:any;

  user:any;
  ngOnInit(): void {
  
//our story
this._apiService.getlovetory().subscribe(
  data=>{
    console.log("lovestory",data);
    this.url5=JSON.stringify(data.Url);
    this.urlget5=this.url.replace(/['"]+/g, '');
    console.log(this.url.replace(/['"]+/g, ''));
   console.log("typestory"+typeof(data.Data));
    this.lstproject1=JSON.stringify(data.Data);
   // console.log(this.lstproject);
     this.lstproject21=JSON.parse(this.lstproject1);
    console.log("lovestory66"+this.lstproject21);
    //  console.log("uyuy"+this.lstproject)
  }
);


//get couple
// ============male==========

this._apiService.getcouplemale().subscribe(
  data=>{
   // console.log("data",data1);
    this.url7=JSON.stringify(data.Url);
    this.urlget7=this.url7.replace(/['"]+/g, '');
   // console.log(this.url2);
   console.log("type22"+typeof(data.Data));
    this.cupmale=JSON.stringify(data.Data);
    console.log("cpuple2"+this.cupmale);
    console.log("type"+typeof(this.cupmale));
     this.cupmale2=JSON.parse(this.cupmale);
   //  this.user =this.cupmale2[0];         // a simple user
  //  console.log(user.UserName);
  console.log("typeee"+typeof(this.cupmale2));
     console.log("couple"+this.user);
  }
);

// =================female====

// ====================================================
  this._apiService.getevents().subscribe(
    data=>{
      console.log("data",data);
      this.url=JSON.stringify(data.Url);
      this.urlget=this.url.replace(/['"]+/g, '');
      console.log(this.url.replace(/['"]+/g, ''));
      this.lstproject=JSON.stringify(data.Data);
     // console.log(this.lstproject);
       this.lstproject2=JSON.parse(this.lstproject);
     //  console.log(this.url+this.lstproject2);
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


//gallery

this._apiService.getgallery().subscribe(
  data4=>{
   // console.log("data",data4);
    this.url4=JSON.stringify(data4.Url);
    // console.log("jjjj"+this.url3);
    this.urlget4=this.url4.replace(/['"]+/g, '');
    //console.log("bride34"+this.urlget3);
    this.gal=JSON.stringify(data4.Data);
   console.log("data"+this.gal);
     this.gal2=JSON.parse(this.gal);
    // console.log("uyuy"+this.bride)
  }
);


  }
}
