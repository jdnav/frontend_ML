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
    STATUS: new FormControl(), // Finantial status
    NAME_EDUCATION_TYPE: new FormControl(),
    NAME_INCOME_TYPE: new FormControl(),
    CODE_GENDER: new FormControl(),
    NAME_FAMILY_STATUS: new FormControl(),
    NAME_HOUSING_TYPE: new FormControl(),
    CNT_CHILDREN: new FormControl(),
    FLAG_OWN_CAR: new FormControl(),
    FLAG_MOBIL: new FormControl(), // Mobile phone
    FLAG_WORK_PHONE: new FormControl(), // Work phone
    FLAG_PHONE: new FormControl(), // Landline
    FLAG_EMAIL: new FormControl(),
    CTM_FAM_MEMBERS: new FormControl(), // Family size
    FLAG_OWN_REALITY: new FormControl(),
    FLAG_BIRTH: new FormControl(),
    DAYS_EMPLOYED: new FormControl(),
    MONTH_BALANCE: new FormControl(),
    AMT_INCOME_TOTAL: new FormControl(),
    OCCUPATION_TYPE: new FormControl(),
  });

  finantialStatus: SelectOption[] = [
    { value: '0', viewValue: '1-29 days past due' },
    { value: '1', viewValue: '30-59 days past due' },
    { value: '2', viewValue: '60-89 days overdue' },
    { value: '3', viewValue: '90-119 days overdue' },
    { value: '4', viewValue: '120-149 days overdue' },
    { value: '5', viewValue: 'write-offs for more than 150 days' },
    { value: 'C', viewValue: 'paid off that month' },
    { value: 'X', viewValue: 'No loan for the month' }
  ];

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
