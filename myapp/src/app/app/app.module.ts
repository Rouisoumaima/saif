import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RefusComponent } from './refus/refus.component';



@NgModule({
  declarations: [
    ConfirmationComponent,
    RefusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
