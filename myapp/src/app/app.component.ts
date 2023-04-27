import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
const APIURL = "http://localhost:8380/SpringMvc/user/addUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp'
 
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8380/SpringMvc/login').subscribe((data) => {
      this.user = data;
    });
  }
}
 

  


