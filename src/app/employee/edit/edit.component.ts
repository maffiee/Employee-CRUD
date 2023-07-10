import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  employeeForm: Employee = {
    id: 0,
    name: '',
    position: '',
  };
 
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private employeeService: EmployeeService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.employeeService.getById(id).subscribe((data) => {
      this.employeeForm = data;
    });
  }
 
  update() {
    this.employeeService.update(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employee/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}


// (Line: 12-16) Declared the 'formEmployee' variable to store the user form edited data.
// (Line: 18-22) Injected the 'ActivatedRoute', 'Router', 'EmployeeService'.
/* (Line: 24-29) Inside of the 'ngOninit' life cycle method, we try to read the 'id' value from the route using the 
'ActivatedRoute.paramMap.subscribe()', then we are invoking our get API call. */
/* (Line: 31-35) Invokes the API call by 'id' value, on successful the response will be assigned to 'formEmployee' variable, 
so that data gets rendered on the form.*/
// (Line: 37-47) Invokes the update API, on success navigate back to the 'HomeComponent'.
