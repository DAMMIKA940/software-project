import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
@Component({
  selector: 'app-videoupload10',
  templateUrl: './videoupload10.component.html',
  styleUrls: ['./videoupload10.component.css']
})
export class Videoupload10Component implements OnInit {


  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  public uploadlink10 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink10)
    this.api.uploadLink10(this.uploadlink10)
    alert('Upload 10 grade sucess')

  }

}
