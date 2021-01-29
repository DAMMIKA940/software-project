import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Pastpaper } from "../models/PastPaper";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private pastpapers: Pastpaper[] = [];
  private pastpapers$ = new Subject< Pastpaper []>();
  readonly url = "http://localhost:3000/api/pastpapers";

  constructor(private http: HttpClient) {}

  getPastPapers() {
    this.http
      .get<{ pastpapers: Pastpaper [] }>(this.url)
      .pipe(
        map((pastpaperData) => {
          return pastpaperData.pastpapers;
        })
      )
      .subscribe((pastpapers) => {
        this.pastpapers = pastpapers;
        this.pastpapers$.next(this.pastpapers);
      });
  }

  getPastpaperStream() {
    return this.pastpapers$.asObservable();
  }

  addPastpaper(name: string, pastpaper: Blob): void {
    const pastpaperData = new FormData();
    pastpaperData.append("name", name);
    pastpaperData.append("pastpaper", pastpaper, name);
    this.http
      .post<{ pastpaper: Pastpaper }>(this.url, pastpaperData)
      .subscribe((pastpaperData) => {
        const pastpaper: Pastpaper = {
          _id: pastpaperData.pastpaper._id,
          name: name,
          paperPath: pastpaperData.pastpaper.paperPath
        };
        this.pastpapers.push(pastpaper);
        this.pastpapers$.next(this.pastpapers);
      });

}

private _getUrl = 'http://localhost:3000/api/pastpapers/';



getPapers(){
  return this.http.get<any>(this._getUrl);
}
}
