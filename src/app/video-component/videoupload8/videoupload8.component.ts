import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
@Component({
  selector: 'app-videoupload8',
  templateUrl: './videoupload8.component.html',
  styleUrls: ['./videoupload8.component.css']
})
export class Videoupload8Component implements OnInit {


  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  public uploadlink8 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink8)
    this.api.uploadLink8(this.uploadlink8)
    alert('Upload 08 grade sucess')

  }
}
