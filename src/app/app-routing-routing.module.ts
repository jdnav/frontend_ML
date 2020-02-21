import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';

export const routes: Routes = [
  { path: '', component: CreditCardComponent, pathMatch: 'full' },
  { path: 'credit-card', component: CreditCardComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
