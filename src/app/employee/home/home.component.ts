import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEmployee: Employee[] = [];
  deleteModal:any;
  idTodelete: number = 0;
 
  constructor(private employeeService: EmployeeService) {}

  
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.get();
  }
 
  get() {
    this.employeeService.get().subscribe((data) => {
      this.allEmployee = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.employeeService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEmployee = this.allEmployee.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}


// (Line: 1-3) imports
// (Line: 5) Declare window variable type.
/*(Line: 7-11)To make the 'HomeComponent' as angular component it should be decorated with '@Component' decorator that loads from the '@angular/core'.
   '@Component' contains : selector, templateUrl, and styleUrls as meta-data
*/
// (Line: 13) Variable 'allEmployee' is of  'Employee' array type. This variable is to store all API response data into this variable.
// (Line: 14) The variable 'deleteModal' to store the instance of the botstrap modal.
// (Line: 15) The variable 'idToDelete' to store the 'id' value of the item to be deleted.
// (Line: 22-24) Assign the bootstrap modal instance to our 'deleteModal' variable.
/* (Line: 21-26) The 'ngOnInit()' is one of the angular component life cycle method. This method executed automatically on invoking our 'HomeComponent'. 
Inside of this method we invoke our 'get()' method. */
/* (Line: 28-32) Here defined method like 'get()'. Invoking the get API call in service file. Here 'subscribe()' get executed after completion of the API call.
 On receiving response assign to the 'allEmployee' variable. */
//  (Line: 34-37) The 'openDeleteModal()' method gets invoked by clicking the delete button. Here we open the delete confirmation modal.
// (Line: 38-45) The 'delete()' method invokes the delete API call on the success we will hide our bootstrap modal and also exclude the item from the 'allEmployee' variable.

