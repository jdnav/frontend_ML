import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface SelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditCardForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    NAME_INCOME_TYPE: new FormControl(),
    CODE_GENDER: new FormControl(),
    NAME_EDUCATION_TYPE: new FormControl(),
    NAME_FAMILY_STATUS: new FormControl(),
    NAME_HOUSING_TYPE: new FormControl(),
  });

  educationTypes: SelectOption[] = [
    { value: 'Academic degree', viewValue: 'Academic degree' },
    { value: 'Higher education', viewValue: 'Higher education' },
    { value: 'Incomplete higher', viewValue: 'Incomplete higher' },
    { value: 'Lower secondary', viewValue: 'Lower secondary' },
    { value: 'Secondary / secondary special', viewValue: 'Secondary / secondary special' },
  ];

  incomeTypes: SelectOption[] = [
    { value: 'Commercial associate', viewValue: 'Commercial associate' },
    { value: 'Pensioner', viewValue: 'Pensioner' },
    { value: 'State servant', viewValue: 'state servant' },
    { value: 'Student', viewValue: 'Student' },
    { value: 'Working', viewValue: 'Working' },
  ];

  genderTypes: SelectOption[] = [
    { value: 'M', viewValue: 'Male' },
    { value: 'F', viewValue: 'Female' },
  ];

  familyStatusTypes: SelectOption[] = [
    { value: 'Civil marriage, Married', viewValue: 'Civil marriage, Married' },
    { value: 'Separated', viewValue: 'Separated' },
    { value: 'Single / not married', viewValue: 'Single / not married' },
    { value: 'Widow', viewValue: 'Widow' },
  ];

  houseTypes: SelectOption[] = [
    { value: 'Co-op apartment', viewValue: 'Co-op apartment' },
    { value: 'House / apartment', viewValue: 'House / apartment' },
    { value: 'Office apartment', viewValue: 'Office apartment' },
    { value: 'Rented apartment', viewValue: 'Rented apartment' },
    { value: 'With parent', viewValue: 'With parent' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
