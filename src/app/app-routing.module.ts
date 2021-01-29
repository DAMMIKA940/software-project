import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import{ AdminLoginComponent} from './admin-login/admin-login.component'
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component'
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoUploadComponent } from './video-component/video-upload/video-upload.component';
import { PaperUploadComponent } from './pastpaper-component/paper-upload/paper-upload.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { AdvertistmentComponent } from './advertistment/advertistment.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AppComponent } from './app.component';
import { VideoDetailComponent } from './video-component/video-detail/video-detail.component';
import { VideoListComponent } from './video-component/video-list/video-list.component';
import { VideoCenterComponent } from './video-component/video-center/video-center.component';
import {PaperComponent} from './pastpaper-component/paper/paper.component'
import { PastpaperCenterComponent } from './pastpaper-component/pastpaper-center/pastpaper-center.component';
import { PastpaperDetailComponent } from './pastpaper-component/pastpaper-detail/pastpaper-detail.component';
import { PastpaperListComponent } from './pastpaper-component/pastpaper-list/pastpaper-list.component';
//import {VideoUploadGrade06Component} from 'src/app/video-component/video-upload-grade06/video-upload-grade06.component';
import { from } from 'rxjs';
import { VideoUploadGradeComponent } from './video-component/video-upload-grade/video-upload-grade.component';
import { VideoPageGradeComponent } from './video-component/video-page-grade/video-page-grade.component';
import { VideodisplayComponent } from './video-component/videodisplay/videodisplay.component';
import { Videodislpay07Component } from './video-component/videodislpay07/videodislpay07.component';
import { Videoupload07Component } from './video-component/videoupload07/videoupload07.component';
import { Videoupload06Component } from './video-component/videoupload06/videoupload06.component';
import { Videoupload8Component } from './video-component/videoupload8/videoupload8.component';
import { Videoupload9Component } from './video-component/videoupload9/videoupload9.component';
import { Videoupload10Component } from './video-component/videoupload10/videoupload10.component';
import { Videoupload11Component } from './video-component/videoupload11/videoupload11.component';
import { Videoddisplay8Component } from './video-component/videoddisplay8/videoddisplay8.component';
import { Videoddisplay9Component } from './video-component/videoddisplay9/videoddisplay9.component';
import { Videoddisplay10Component } from './video-component/videoddisplay10/videoddisplay10.component';
import { Videoddisplay11Component } from './video-component/videoddisplay11/videoddisplay11.component';


const routes: Routes = [
  { path :'*', redirectTo : '/home' , pathMatch : 'full'},
  { path :'events' , component : EventsComponent},
  { path :'*register' , component : RegisterComponent},
  { path :'*login', component : LoginComponent },
  { path :'*special' , component : SpecialEventsComponent , canActivate : [AuthGuard] },
  { path :'*about' , component : AboutComponent},
  { path :'home' , component : HomeComponent},
  { path :'admin-registration',component:AdminRegistrationComponent},
  { path :'admin-page' ,component:AdminPageComponent},
  { path :'admin-login', component : AdminLoginComponent },
  { path :'app-dashboard',component:DashboardComponent },
  { path :'app-video-upload',component:VideoUploadComponent},
  { path :'app-paper-upload',component:PaperUploadComponent},
  { path :'app-create-profile',component:CreateProfileComponent},
  { path :'app-all-profiles',component:AllProfilesComponent},
  { path :'app-advertistment',component:AdvertistmentComponent},
  { path :'app-update-post',component:UpdatePostComponent},
   {path:'app-root',component:AppComponent},
   {path:'app-video-page',component:VideoUploadComponent},
   { path :'video-detail', component:VideoDetailComponent},
  { path :'video-list',component:VideoListComponent},
  { path :'videos',component:VideoCenterComponent},
  {path:'app-paper',component:PaperComponent},
{path:'app-paper-upolad',component:PaperUploadComponent},
{path:'app-pastpaper-center',component:PastpaperCenterComponent},
{path:'app-pastpaper-detail',component:PastpaperDetailComponent},
{path:'app-pastpaper-list',component:PastpaperListComponent},
//{path:'app-video-upload-grade06',component:VideoUploadGrade06Component},
{path:'app-video-upload-grade',component:VideoUploadGradeComponent},
{path:'app-video-page-grade',component:VideoPageGradeComponent},
{path:'app-videodisplay',component:VideodisplayComponent},
{path:'app-videodislpay07',component:Videodislpay07Component},
{path:'app-videoupload07',component:Videoupload07Component},
{path:'app-videoupload06',component:Videoupload06Component},
{path:'app-videoupload8',component:Videoupload8Component},
{path:'app-videoupload9',component:Videoupload9Component},
{path:'app-videoupload10',component:Videoupload10Component},
{path:'app-videoupload11',component:Videoupload11Component},
//{path:'app-videoupload06',component:Videoupload06Component},
{path:'app-videoddisplay8',component:Videoddisplay8Component},
{path:'app-videoddisplay9',component:Videoddisplay9Component},
{path:'app-videoddisplay10',component:Videoddisplay10Component},
{path:'app-videoddisplay11',component:Videoddisplay11Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
