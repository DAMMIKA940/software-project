import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Upload } from "../models/upload";
import { Subject } from "rxjs";
import { Video } from '../video';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private upload: Upload[] = [];
  private upload$ = new Subject<Upload[]>();
  readonly url = "http://localhost:3000/api/upload";

  constructor(private http: HttpClient) {}

  getupload() {
    this.http
      .get<{ upload: Upload[] }>(this.url)
      .pipe(
        map((uploadData) => {
          return uploadData.upload;
        })
      )
      .subscribe((upload) => {
        this.upload = upload;
        this.upload$.next(this.upload);
      });
  }

  getUploadStream() {
    return this.upload$.asObservable();
  }

  addProfile(subjectname:string ,name: string, video: Blob,teachername:string,insertgrade:string): void {     /////////////////
    const uploadData = new FormData();
    uploadData.append("subjectname", subjectname);
    uploadData.append("name", name);
    uploadData.append("video", video, name);
    uploadData.append("teachername",teachername );
    uploadData.append("insertgrade",insertgrade );
    this.http
      .post<{ upload: Upload }>(this.url, uploadData)
      .subscribe((uploadData) => {
        const upload: Upload = {
          _id: uploadData.upload._id,
          subjectname:name,
          name: name,
          teachername:name,
          insertgrade:name,
          videoPath: uploadData.upload.videoPath,

        };
        this.upload.push(upload);
        this.upload$.next(this.upload);
      });
  }

  private _getUrl = 'http://localhost:3000/api/uploads/';
  private _putUrl = 'http://localhost:3000/api/uploads/';
  apiEndPoint  = 'http://localhost:3000';

getVideos(){
  return this.http.get<any>(this._getUrl);
}

deleteVideo(_id :any){

  return this.http.delete<any>(this._getUrl + _id )
}
/*update(update :any){

  return this.http.put(this._getUrl +_id,update)
}
*/
updateTask(updatedTask: any) {
  return this.http.put(this.apiEndPoint+'/api/uploads/'+updatedTask._id, updatedTask);
}

/*updateVideo(video :Video){


  return this.http.put( this._putUrl + video._id )
}*/


}
