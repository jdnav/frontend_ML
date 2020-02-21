import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
} from '@angular/material/input';


@NgModule({
  declarations: [ContactComponent, CreditCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [ContactComponent, CreditCardComponent]
})
export class PagesModule { }
