import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastpaper-detail',
  templateUrl: './pastpaper-detail.component.html',
  styleUrls: ['./pastpaper-detail.component.css'],
  inputs:['pastpaper']
})
export class PastpaperDetailComponent implements OnInit {

  pastpaper :any;

public editTitle:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.editTitle=false
  }
  onTitleClick(){
    this.editTitle=true
  }
}
