import { Component, OnInit, OnDestroy,EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-all-profiles",
  templateUrl: "./all-profiles.component.html",
  styleUrls: ["./all-profiles.component.css"],
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  fileList ;
  private profileSubscription: Subscription;
  private deleteprofilesEvent = new EventEmitter()
  form: FormGroup;
  profile: Profile;
  imageData: string;

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
///////////////////////////////////////

  onSubmit() {
    this.profilesService.addProfile(this.form.value.name, this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }


onDelete(_id: string){

  this.profilesService.deletePost(_id);
  alert('delete sucess')
  this.reload();
}

reload() {
  this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  this._router.onSameUrlNavigation = 'reload';
  this._router.navigate(['./'], { relativeTo: this.route });
}


upload(){


}


}



