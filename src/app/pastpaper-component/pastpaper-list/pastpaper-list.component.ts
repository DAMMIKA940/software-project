import { Component, OnInit,EventEmitter } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

import { Pastpaper } from "src/app/models/Pastpaper";

@Component({
  selector: 'app-pastpaper-list',
  templateUrl: './pastpaper-list.component.html',
  styleUrls: ['./pastpaper-list.component.css'],
  inputs:['pastpapers'],
  outputs:['SelectPastpaper']
})
export class PastpaperListComponent implements OnInit {
  pastpapers :[];
  pastpaper;

  public SelectPastpaper = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(vid :Pastpaper){
    this.SelectPastpaper.emit(vid)

  }
}
