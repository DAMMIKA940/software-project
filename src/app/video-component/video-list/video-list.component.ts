import { Component, OnInit,EventEmitter } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from 'src/app/api.service'
import { from } from 'rxjs';
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs:['videos'],
  outputs:['SelectVideo']
})
export class VideoListComponent implements OnInit {
videos :[];
video;
showMainContent: Boolean = false;
tabIndex = 6 ;
private deleteVideoEvent = new EventEmitter()
public SelectVideo = new EventEmitter();
public show:boolean = true;
public buttonName:any = 'Show';
   Id: string;
   name: string;
  videoPath: string;
  subjectname:string;
  teachername:string;
  editMode: boolean = false;
  insertgrade:string
  hideme=[]

  constructor(private _videoService :VideoService,private _router : Router,private route: ActivatedRoute,private api : ApiService) {


   }

   ngOnInit() {

}

  onSelect(vid :Video){
    this.SelectVideo.emit(vid)

  }

  getMyTaskLists() {
    this._videoService.getVideos().subscribe((res: any) => {
      // console.log('My response');
      // console.log(res);

      this.videos = res.data;
      //console.log(this.myTaskList);
    });
  }
  deleteVideo(_id :String){
    this._videoService.deleteVideo(_id).subscribe((res: any) => {
      this.getMyTaskLists();

      alert("delete sucessfull")
this.reload();


    });
  }
  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['./'], { relativeTo: this.route });
  }





  onTabClick(index){
    this.tabIndex = index;
}
  }

