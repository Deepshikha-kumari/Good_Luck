import { Injectable } from '@angular/core';
import {  HttpClient }  from '@angular/common/http'
// import { HttpHeaders } from  '@angular/common/http'
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {  HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable,observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
baseURL: string = "https://securedsolutions.in/goodluckadmin/api/Admin/"
//baseURL: string = "http://localhost/secured/goodluckadmin/api/Admin/"
  // "https://securedsolutions.in/goodluckapi/api/Admin/";
  code:any;
  message:any;
  message1:any;
  alert:any=false
  constructor(private http:HttpClient,private route:Router) { }



          getDisplayuser():Observable<any>{

            return this.http.get('https://securedsolutions.in/goodluckapi/api/Admin/disuser');
            
            
          }
                 



  apiCall(data:any)
               {
 
               // const headers = { 'content-type': 'application/json'}  
                 const body=JSON.stringify(data);
                 console.log("registration"+ body);
                 return this.http.post(this.baseURL + 'registration', body,{ responseType: 'text' as 'json' })
     
                  //  var data1=JSON.stringify(data);
                  //   console.log('this is data one'+data1);
                  // var data3= data1.replace(/['"]+/g, '');
                  // console.log(data3);
                  //   var data4=data3.replace(/[',]+/g, '&');
                  //   console.log(data4);
                  //   var data5=data4.replace(/[':]+/g, '=');
                  //   console.log(data5);
                  //   var data6=data5.replace(/['{}]+/g, '');
                  //   console.log(data6);
                  // return  this.http.post('https://sipws.pxsn.in/login',data1);
                 // return  this.http.post('https://securedsolutions.in/goodluckapi/api/Admin/registration',data1);

          }

          apiCall2(data:any): Observable<any>
          {

            const body=JSON.stringify(data);
            console.log("signup"+ body);
            return this.http.post(this.baseURL + 'signup', body,{ responseType: 'text' as 'json' })


            // const headers = { 'content-type': 'application/json'}  
           // const body=JSON.stringify(data);
            // console.log(data)
            // return this.http.post(this.baseURL + 'signup', data,{'headers':headers})



            // var data1=JSON.stringify(data);
            // return  this.http.post('https://securedsolutions.in/goodluckapi/api/Admin/signup',data);

          }


          apiCall3(data:any): Observable<any>
          {

            const headers = { 'content-type': 'application/json'}  
           // const body=JSON.stringify(data);
            console.log(data)
            return this.http.post(this.baseURL + 'login', data,{'headers':headers})



            // var data1=JSON.stringify(data);
            // return  this.http.post('https://securedsolutions.in/goodluckapi/api/Admin/signup',data);

          }
          // addPerson(person:Person): Observable<any> {
          //   const headers = { 'content-type': 'application/json'}  
          //   const body=JSON.stringify(person);
          //   console.log(body)
          //   return this.http.post(this.baseURL + 'people', body,{'headers':headers})
          // }






                getevents():Observable<any>{
                  return this.http.get(this.baseURL + 'event');
                  
                  
                }
                getuserboy():Observable<any>{
                  return this.http.get(this.baseURL + 'userboy');
                  
                  
                }


                getcouplemale():Observable<any>{
                  return this.http.get(this.baseURL + 'couplesmale');
                  
                  // return this.http.get('http://localhost/secured/goodluckadmin/api/Admin/couplesmale');
                }


                getusergirl():Observable<any>{
                  return this.http.get(this.baseURL + 'usergirl');
                  
                  
                }

                getpackage():Observable<any>{
                  return this.http.get(this.baseURL + 'plans');
                  
                  
                }

                getservice():Observable<any>{
                  return this.http.get(this.baseURL + 'service');
                  
                  
                }
                getgallery():Observable<any>{
                  return this.http.get(this.baseURL + 'gallery');
                  
                  
                }

                getlovetory():Observable<any>{
                  return this.http.get(this.baseURL + 'ourLovestory');
                  
                  
                }


                // getToken(){
                //   return localStorage.getItem('token');
                // }
}
