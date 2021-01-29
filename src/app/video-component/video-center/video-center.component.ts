import { Component, OnInit,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';///////////////////////////////////

import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video'


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {

  public buttonName:any = 'Show';
  videos: Array<Video>;
selectedVideo : Video;

video;
public SelectVideo = new EventEmitter();
  constructor(private _videoService :VideoService,public _authService:AuthService ) { }///////////////////////

  ngOnInit(): void {

    this._videoService.getVideos().subscribe(data => this.videos = data);
     console.log("videos array", this.videos);
  }

  onSelectVideo(video:any){
    this.selectedVideo=video

    console.log(this.selectedVideo)
  }

  onDeleteVideoEvent(video:any){


    let videoArray =this.videos;
    this._videoService.deleteVideo(video)
    .subscribe(resDeletedVideo =>{

      for(let i =0;i<videoArray.length ;i++){

        if(videoArray[i]._id===video._id){
          videoArray.splice(i,1)
        }
      }
    })
    this.selectedVideo=null;
  }


}
