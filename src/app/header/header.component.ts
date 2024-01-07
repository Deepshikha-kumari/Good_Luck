import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
showbutton:boolean=false;
showbutton2:boolean=false;
name:any;
  ngOnInit(): void {
    if (sessionStorage.getItem('status')=='1') {
     this.showbutton=true;
     this.showbutton2=false;
     this.name=sessionStorage.getItem('name');
     }else{
      this.showbutton=false;
      this.showbutton2=true;
     }



  }

}
