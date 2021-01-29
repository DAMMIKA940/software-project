import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video'
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
   inputs:['video'],
   outputs :['deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  videos :[];
  video :any;

public editTitle:boolean=false;
public SelectVideo = new EventEmitter();
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


  onSelect(vid :Video){
    this.SelectVideo.emit(vid)

  }

  condition = false;
toggle() {
    this.condition = true;
}
}
