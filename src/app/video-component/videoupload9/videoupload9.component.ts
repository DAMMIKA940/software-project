import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
@Component({
  selector: 'app-videoupload9',
  templateUrl: './videoupload9.component.html',
  styleUrls: ['./videoupload9.component.css']
})
export class Videoupload9Component implements OnInit {


  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  public uploadlink9 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink9)
    this.api.uploadLink9(this.uploadlink9)
    alert('Upload 09 grade sucess')

  }
}
