import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
const APIURL = "localhost:8383/SpringMvc/user/addUser";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
 
 

  user =  {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    titre_poste: "",
    priorite: null,
    dateEmbauche: "",
    num_tel: "",
    placeparkings :null
}
  constructor(private http: HttpClient,private router : Router) {}


  change(user: any): void {
    console.log('User data:', user);
    const APIURL = "http://localhost:8380/SpringMvc/users/add-user";
    this.http.post(APIURL, user).subscribe(
        (res : any) => {
          window.localStorage.setItem('id',res.id);
          window.localStorage.setItem('email',res.email);
          this.router.navigate(['/', 'registration'])

        },
        error => {
            console.error('Error  user:', error);
        }
    );
}
}

