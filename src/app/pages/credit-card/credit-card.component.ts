import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditCardForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),

  });

  constructor() { }

  ngOnInit(): void {
  }

}
