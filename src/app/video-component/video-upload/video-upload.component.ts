import { Component, OnInit } from '@angular/core';
import { VideoUploadService } from 'src/app/video-upload.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import {VideoService} from 'src/app/services/video.service'
import { from } from 'rxjs';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  form: FormGroup;
  profile: VideoService;
  videoData: string;
  constructor(private _router : Router,private route: ActivatedRoute,private VideoService: VideoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      subjectname : new FormControl(null),
      name: new FormControl(null),
      teachername:new FormControl(null),/////////////////
      video: new FormControl(null),
      insertgrade:new FormControl(null),
    });


  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ video: file });
    const allowedMimeTypes = ['video/mp4', 'video/mpeg ', 'video/3gpp'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.videoData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit() {
    this.VideoService.addProfile(this.form.value.subjectname,this.form.value.name, this.form.value.video,this.form.value.teachername,this.form.value.insertgrade);
    this.form.reset();
    this.videoData = null;
    alert("upload sucessfull")
    this.reload();
  }

  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['./'], { relativeTo: this.route });
  }
}












