import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-month-form',
  templateUrl: './month-form.component.html',
  styleUrl: './month-form.component.css',
})
export class MonthFormComponent implements OnInit {
  // dropdownList = [];

  dropdownList = [
    { value: '1', name: 'January' },
    { value: '2', name: 'February' },
    { value: '3', name: 'March' },
    { value: '4', name: 'April' },
    { value: '5', name: 'May' },
    { value: '6', name: 'June' },
    { value: '7', name: 'July' },
    { value: '8', name: 'August' },
    { value: '9', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];
  months = [{ value: '', name: '' }];
  dropdownSettings: IDropdownSettings = {};

  monthForm!: FormGroup;
  selectedMonths: any = [];

  private fb = inject(FormBuilder);

  constructor() {}
  ngOnInit(): void {
    this.months = this.dropdownList;

    this.dropdownSettings = {
      idField: 'value',
      textField: 'name',
      enableCheckAll: false,
      selectAllText: 'Select All Items From List',
      unSelectAllText: 'UnSelect All Items From List',
    };

    this.selectedMonths = [{ value: '1', name: 'January' }];
    this.monthForm = this.fb.group({
      monthList: [this.selectedMonths],
    });
  }

  onSubmit() {
    console.log(this.monthForm.value);
  }
}
