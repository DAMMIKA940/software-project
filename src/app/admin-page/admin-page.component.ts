import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { url } from 'inspector';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor( public _authService:AuthService) { }

  ngOnInit(): void {
  };





}

