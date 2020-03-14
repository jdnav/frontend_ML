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
    CODE_GENDER: new FormControl(), // Gender
    FLAG_OWN_CAR: new FormControl(), // Is there a car
    FLAG_OWN_REALTY: new FormControl(), // Is there a property
    CNT_CHILDREN: new FormControl(), // Number of children
    AMT_INCOME_TOTAL: new FormControl(), // Annual income
    NAME_INCOME_TYPE: new FormControl(), // Income Category
    NAME_EDUCATION_TYPE: new FormControl(), // Education level
    NAME_FAMILY_STATUS: new FormControl(), // Marital status
    NAME_HOUSING_TYPE: new FormControl(), // Way of living
    DAYS_BIRTH: new FormControl(), // Birthday
    DAYS_EMPLOYED: new FormControl(), // Start date
    FLAG_MOBIL: new FormControl(), // Is there a mobile phone
    FLAG_WORK_PHONE: new FormControl(), // Work phone
    FLAG_PHONE: new FormControl(), // Is there a phone
    FLAG_EMAIL: new FormControl(), // Is there an email
    OCCUPATION_TYPE: new FormControl(), // Occupation
    CTM_FAM_MEMBERS: new FormControl(), // Family size
    /**
     * The month of the extracted data is the starting point, backwards,
     * 0 is the current month,
     * -1 is the previous month, and so on
     */
    MONTHS_BALANCE: new FormControl(), // record month
    /**
     * 0: 1-29 days past due
     * 1: 30-59 days past due
     * 2: 60-89 days past due
     * 3: 90-119 days past due
     * 4: 120-149 days past due
     * 5: overdue or bad debts, white-offs for more than 150 days
     * C: paid off that month
     * X: No loan for the month
     */
    STATUS: new FormControl(), // Finantial status
    FLAG_BIRTH: new FormControl(),
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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.creditCardForm.value);
  }

}
