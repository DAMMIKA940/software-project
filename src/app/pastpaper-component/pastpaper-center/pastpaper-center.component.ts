import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

import { Pastpaper } from "src/app/models/Pastpaper";
@Component({
  selector: 'app-pastpaper-center',
  templateUrl: './pastpaper-center.component.html',
  styleUrls: ['./pastpaper-center.component.css'],
  providers:[PaperService]
})
export class PastpaperCenterComponent implements OnInit {



  pastpapers: Array<Pastpaper>;
  selectedPastpaper : Pastpaper
    constructor(private _paperService :PaperService) { }

    ngOnInit(): void {
      this._paperService.getPapers().subscribe(data => this.pastpapers = data);
       console.log("pastpapers array", this.pastpapers);
    }



  onSelectVideo(pastpaper:any){
    this.selectedPastpaper=pastpaper
    console.log(this.selectedPastpaper)
  }
}
