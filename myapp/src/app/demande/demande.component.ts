
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-demande',
  
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  constructor(private router: Router) { }
  dateRange: DateRange = {
    startDate: new Date(''),
    endDate: new Date(''),
  };
      }
     
    
      