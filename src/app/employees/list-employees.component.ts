import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees : Employee[] =[{
  id: 'EMP1O1O',
  name: 'SACHIN',
  gender: 'MALE',
  dateofbirth: new Date('4/24/1973'),
  email:'SACHIN@GMAIL.COM', 
  phone: 8101010101,
  isActive:true,
  photopath:'assets/images/sachin.jpg'
},
{
  id: 'EMP1O11',
  name: 'KEERTHI',
  gender: 'FEMALE',
  dateofbirth: new Date('6/13/1992'),
  email:'KEERTHI@GMAIL.COM', 
  phone: 8101010110,
  isActive:true,
  photopath:'assets/images/keerthi.jpg'
},
{
  id: 'EMP1O12',
  name: 'VIJAY',
  gender: 'MALE',
  dateofbirth: new Date('6/26/1974'),
  email:'VIJAY@GMAIL.COM', 
  phone: 8101010102,
  isActive:true,
  photopath:'assets/images/vijay.jpg'
},
{
  id: 'EMP1O13',
  name: 'KAJAL',
  gender: 'FEMALE',
  dateofbirth: new Date('3/13/1986'),
  email:'KAJAL@GMAIL.COM', 
  phone: 81010101013,
  isActive:true,
  photopath:'assets/images/kajal.jpg'
}
];
  constructor() { }

  ngOnInit() {
  }

}
