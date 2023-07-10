import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  employeeForm: Employee = {
    id: 0,
    name: '',
    position: '',
  };
 
  constructor(private employeeService:EmployeeService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.employeeService.create(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employee/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}


// (Line: 12-16) Declared the 'employeeForm' variable to store the user entered form data.
// (Line: 18-19) Injected the 'EmployeeService' and 'Router'.
// (Line: 23-33) Invoking the API call to post the data.
// (Line: 27) On successful saving data to the server, we navigate to the home page.
