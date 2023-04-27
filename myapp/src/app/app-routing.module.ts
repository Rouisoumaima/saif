import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';

import { LoginComponent } from './login/login.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DemandeComponent } from './demande/demande.component';
import { ConfirmationComponent } from './app/confirmation/confirmation.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'demande', component: DemandeComponent},
  {path: 'confirmation', component: ConfirmationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
