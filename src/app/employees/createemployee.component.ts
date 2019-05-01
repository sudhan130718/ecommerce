import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dep } from '../model/dep.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { container } from '@angular/core/src/render3';

@Component({
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  previewPhoto = false; //for photo preview

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;

  }
                    //type script attribute:partial
  datePickerConfig: Partial<BsDatepickerConfig>;  //date customise bootstrap

  deps: Dep[] = [       //option value for check box
    { id: 1, name: 'IT' },
    { id: 2, name: 'ECE' },
    { id: 3, name: 'CSE' },
    { id: 4, name: 'EEE' },
    { id: 5, name: 'MECH' }
  ]
  gender = 'female';    //checked option
  department = 'call';
  dep = 3;

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,                //for date customise
        dateInputFormat: 'DD/MM/YY',
        minDate: new Date(1989, 4, 28),
        maxDate: new Date(1990, 3, 13), //date range
      });
  }

  ngOnInit() {
  }

  fullEmployee(empForm: NgForm): void {    //submit option
    console.log(empForm.value);
  }



}
