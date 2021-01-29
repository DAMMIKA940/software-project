import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


loginAdminData : any={}

  constructor(private _Auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){


  this._Auth.loginAdmin(this.loginAdminData)
  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this._router.navigate(['/app-dashboard'])

    },
    err => console.log(err)
  )
  }



}

