import { Component, OnInit,EventEmitter } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from 'src/app/api.service'

@Component({
  selector: 'app-videoddisplay9',
  templateUrl: './videoddisplay9.component.html',
  styleUrls: ['./videoddisplay9.component.css']
})
export class Videoddisplay9Component implements OnInit {
  videos :[];
  video;
  showMainContent: Boolean = false;

  private deleteVideoEvent = new EventEmitter()
  public SelectVideo = new EventEmitter();
  public show:boolean = true;
  public buttonName:any = 'Show';
  mylinkList = [];

    constructor(private _videoService :VideoService,private _router : Router,private route: ActivatedRoute,private api : ApiService) {


     }

     ngOnInit(): void {

      this.api.getVideos9().subscribe(data => this.videos = data);
       console.log("videos array", this.videos);
    }

    onSelect(vid :Video){
      this.SelectVideo.emit(vid)

    }

    getMyTaskLists() {
      this.api.getVideos9().subscribe((res: any) => {
        // console.log('My response');
        // console.log(res);

        this.videos = res.data;
        //console.log(this.myTaskList);
      });
    }
    deleteVideo(_id :String){
      this.api.deleteVideo9(_id).subscribe((res: any) => {
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


    getMyLinkLists() {
      this.api.getLinks9().subscribe((res: any) => {
        // console.log('My response');
        // console.log(res);

        this.mylinkList = res.data;
        // console.log(this.myTaskList);
      });
    }




    }


