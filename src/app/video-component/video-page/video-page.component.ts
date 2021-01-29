import { Component, OnInit, Output,EventEmitter,OnDestroy } from '@angular/core';

import { VideoService } from 'src/app/services/video.service'
import { Upload } from 'src/app/models/upload';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css'],
  inputs:['video'],
  outputs :['deleteVideoEvent']
})
export class VideoPageComponent implements OnInit  {

  video :any;

  public editTitle:boolean=false;

  private deleteVideoEvent = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(){
      this.editTitle=false
    }
    onTitleClick(){
      this.editTitle=true
    }

    deleteVideo(){
      this.deleteVideoEvent.emit(this.video)
    }
  }

