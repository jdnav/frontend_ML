import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CreditCardComponent } from './credit-card/credit-card.component';



@NgModule({
  declarations: [ContactComponent, CreditCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactComponent, CreditCardComponent]
})
export class PagesModule { }
