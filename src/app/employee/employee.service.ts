import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  create(payload: Employee) {
    return this.http.post<Employee>('http://localhost:3000/employee', payload);
  }

  getById(id: number)  {
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`);
   }
    
   update(payload:Employee){
    return this.http.put(`http://localhost:3000/employee/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Employee>(`http://localhost:3000/employee/${id}`);
 }
}

// (Line 12-14) The 'HttpClient.get<T>()' is to invoke the HTTP Get endpoint.
// (Line 16-18) The 'HttpClient.post<T>(payload)' method is invoke the HTTP Post endpoint for saving at the server.
// (Line 20-22) Invokes the HTTP Get endpoint by 'id' value as a filtering parameter.
// (Line 24-26) Invokes the HTTP Put endpoint for updating the item. Here 'id' value needs to be passed in the URL and edited data as a payload.
// (Line 28-31) The 'HttpClient.delete()' invokes the Http Delete request.