import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'

@Component({
  selector: 'app-videoupload06',
  templateUrl: './videoupload06.component.html',
  styleUrls: ['./videoupload06.component.css']
})
export class Videoupload06Component implements OnInit {
  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  public uploadlink ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink)
    this.api.uploadLink(this.uploadlink)
    alert('Upload sucess')

  }
}
