import { Component, OnInit, OnDestroy,EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {



  profiles: Profile[] = [];
  fileList ;
  private profileSubscription: Subscription;
  private deleteprofilesEvent = new EventEmitter()
  constructor(private profilesService: ProfileService,private _router : Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }


}
