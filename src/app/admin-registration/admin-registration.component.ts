import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import{FormControl, FormGroup, NgForm, Validators } from '@angular/forms'

import{ApiService} from './../api.service'

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],

})
export class AdminRegistrationComponent implements OnInit {



public registerObj ={Image:'' ,firstName:'' ,lastName:'',email:'',password:''}

  constructor(private api : ApiService) {

   }

  ngOnInit() {



  }


  url="./assets/img_avatar.png";

  onselectFile(e){
    if(e.target.files){
      var reader =new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url =event.target.result;
      }
    }
  }
  sendData(){
    console.log(this.registerObj)
    this.api.registerAdmin(this.registerObj)
    alert('Register sucess')
  }
}





