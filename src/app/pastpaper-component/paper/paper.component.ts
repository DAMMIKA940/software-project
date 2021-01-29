import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { PaperService } from "src/app/services/paper.service";
import { Pastpaper } from "src/app/models/Pastpaper";

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit , OnDestroy {
  pastpapers: Pastpaper[] = [];
  private pastPaperSubscription : Subscription;
  constructor(private pastpaperService : PaperService) { }

  ngOnInit(): void {

    this.pastpaperService.getPastPapers();
    this.pastPaperSubscription = this.pastpaperService
      .getPastpaperStream()
      .subscribe((pastpapers: Pastpaper[]) => {
        this.pastpapers = pastpapers;
      }); }

  ngOnDestroy() {
    this.pastPaperSubscription.unsubscribe();
  }
}


