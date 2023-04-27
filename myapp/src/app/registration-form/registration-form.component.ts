import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const APIURL = "http://localhost:8383/SpringMvc/login";
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  isLoggedIn = false;

  
  ngOninit(){
   



  }
  loginInfo ={
    username :"" ,
    password :""
  }

  


  registrationForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.registrationForm = this.formBuilder.group({
     
    });
  }

  onsubmit(){
   
    this.http.post<any>(APIURL,this.loginInfo).subscribe(
      (res :any)=>{
        console.log(res);
      },
      (error)=>{
        console.group(error.message);
      }
    )
  }
  


 
  }
  



