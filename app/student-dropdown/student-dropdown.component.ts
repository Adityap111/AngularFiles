import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-dropdown',
  templateUrl: './student-dropdown.component.html',
  styleUrls: ['./student-dropdown.component.css']
})
export class StudentDropdownComponent implements OnInit {

  firstName:string;

  students = [
    new Student(1,'Sparsh','kumar','bangalore',9.2),
    new Student(2,'aditya','patel','delhi',7.2),
    new Student(3,'hari','bhanu','mp',3.2),
    new Student(4,'nilesh','nirav','bihar',5.7),
    new Student(5,'yukti','sinha','mp',6.8),
    
  ]

  constructor() {
    this.firstName="";
   }

  ngOnInit(): void {
  }

}
