import { Component, OnInit,EventEmitter } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/video';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from 'src/app/api.service'

@Component({
  selector: 'app-videodisplay',
  templateUrl: './videodisplay.component.html',
  styleUrls: ['./videodisplay.component.css']
})
export class VideodisplayComponent implements OnInit {

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

    this.api.getVideos().subscribe(data => this.videos = data);
     console.log("videos array", this.videos);
  }

  onSelect(vid :Video){
    this.SelectVideo.emit(vid)

  }

  getMyTaskLists() {
    this.api.getVideos().subscribe((res: any) => {
      // console.log('My response');
      // console.log(res);

      this.videos = res.data;
      //console.log(this.myTaskList);
    });
  }
  deleteVideo(_id :String){
    this.api.deleteVideo(_id).subscribe((res: any) => {
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
    this.api.getLinks().subscribe((res: any) => {
      // console.log('My response');
      // console.log(res);

      this.mylinkList = res.data;
      // console.log(this.myTaskList);
    });
  }

  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  }

