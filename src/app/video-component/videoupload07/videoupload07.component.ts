import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
@Component({
  selector: 'app-videoupload07',
  templateUrl: './videoupload07.component.html',
  styleUrls: ['./videoupload07.component.css']
})
export class Videoupload07Component implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  public uploadlink07 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink07)
    this.api.uploadLink07(this.uploadlink07)
    alert('Upload 07 grade sucess')

  }
}
