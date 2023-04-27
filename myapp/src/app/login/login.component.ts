

import {  Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

const APIURL = "http://localhost:8081/SpringMvc/users/login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginInfo ={
    username :"" ,
    password :"",
    

  }
  
  

  registrationForm: FormGroup;

  submitted = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router :Router ) {
    this.registrationForm = this.formBuilder.group({
     
    });
  }

  

  onsubmit(){
    console.log(this.loginInfo)
    this.http.post<any>(APIURL,this.loginInfo).subscribe(
      (res :any)=>{
        console.log(res);
        window.localStorage.setItem('id',res.id)
        window.localStorage.setItem('email',res.email)
        this.router.navigate(['/', 'registration'])
        
      },
      (error)=>{
        alert("username or password is incorrect !!")
      }
    )
  }  
}


