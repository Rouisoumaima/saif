import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeComponent, DateRange } from 'src/app/demande/demande.component';


@Component({
  selector: 'app-confirmation',
  template: `
    <p>Début : {{ dateRange?.startDate | date }}</p>
    <p>Fin : {{ dateRange?.endDate | date }}</p>
  `,

  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
  
})
export class ConfirmationComponent {
  onsubmit() {
    dateRange:Date;

    ConfirmationComponent.constructor(DemandeComponent, DemandeComponent);
  
    }
  }
  

