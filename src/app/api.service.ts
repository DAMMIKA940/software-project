import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http :HttpClient) {}
  public token:any;
    getDataApi(){
      this.http.get('http://localhost:3000/post').subscribe(res=>{
        console.log(res)
      })
    }



    registerAdmin(registerObj){
      this.http.post('http://localhost:3000/register',registerObj).subscribe(res=>{
        console.log(res)
      })
    }



 uploadLink(uploadlink){//grade 06 video
  this.http.post('http://localhost:3000/uploadlink',uploadlink).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink07(uploadlink07){//grade 07 video link upload
  this.http.post('http://localhost:3000/uploadlink07',uploadlink07).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink8(uploadlink8){//grade 08 video link upload
  this.http.post('http://localhost:3000/uploadlink8',uploadlink8).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink9(uploadlink9){//grade 09 video link upload
  this.http.post('http://localhost:3000/uploadlink9',uploadlink9).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink10(uploadlink10){//grade 10 video link upload
  this.http.post('http://localhost:3000/uploadlink10',uploadlink10).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink11(uploadlink11){//grade 11 video link upload
  this.http.post('http://localhost:3000/uploadlink11',uploadlink11).subscribe(res=>{
        console.log(res)
      })

 }

 apiEndPoint  = 'http://localhost:3000';
 getLinks(){
  return this.http.get(this.apiEndPoint+'/tasks');
 }
 getLinks07(){
  return this.http.get(this.apiEndPoint+'/tasks07');
 }

 getLinks8(){
  return this.http.get(this.apiEndPoint+'/tasks8');
 }
 getLinks9(){
  return this.http.get(this.apiEndPoint+'/tasks9');
 }
 getLinks10(){
  return this.http.get(this.apiEndPoint+'/tasks10');
 }
 getLinks11(){
  return this.http.get(this.apiEndPoint+'/tasks11');
 }

 private _putUrl = 'http://localhost:3000/api/tasks/';


 getVideos(){
   return this.http.get<any>(this._putUrl);
 }
 private _getUrl = 'http://localhost:3000/api/tasks/';

 private _putUrl7 = 'http://localhost:3000/api/tasks07/';
 getVideos07(){
  return this.http.get<any>(this._putUrl7);
}
private _putUrl8 = 'http://localhost:3000/api/tasks8/';
 getVideos8(){
  return this.http.get<any>(this._putUrl8);
}
private _putUrl9 = 'http://localhost:3000/api/tasks9/';
 getVideos9(){
  return this.http.get<any>(this._putUrl9);
}
private _putUrl10 = 'http://localhost:3000/api/tasks10/';
 getVideos10(){
  return this.http.get<any>(this._putUrl10);
}
private _putUrl11 = 'http://localhost:3000/api/tasks11/';
 getVideos11(){
  return this.http.get<any>(this._putUrl11);
}
//private _getUrl = 'http://localhost:3000/api/tasks07/';
deleteVideo(_id :any){

 return this.http.delete<any>(this._getUrl + _id )
}

deleteVideo7(_id :any){

  return this.http.delete<any>(this._putUrl7 + _id )
 }

 deleteVideo8(_id :any){

  return this.http.delete<any>(this._putUrl8 + _id )
 }
 deleteVideo9(_id :any){

  return this.http.delete<any>(this._putUrl9 + _id )
 }
 deleteVideo10(_id :any){

  return this.http.delete<any>(this._putUrl10 + _id )
 }
 deleteVideo11(_id :any){

  return this.http.delete<any>(this._putUrl11 + _id )
 }

//private _getUrl = 'http://localhost:3000/api/tasks/';

  }

