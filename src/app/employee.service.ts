import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  isLoggedIn() {
    return localStorage.getItem("isLogged");
  }

  private baseUrl="http://localhost:8085/api/employees";
  private authUrl="http://localhost:8085/User/check";
  constructor(private http:HttpClient) {
    
  }

  authUser(payload: any) :Observable<boolean> {
    return this.http.post<boolean>(`${this.authUrl}`,payload);
  }
  getAllEmployee() :Observable<Employee[]>
  {
    return this.http.get <Employee[]>(`${this.baseUrl}`)
  }
  addEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(`${this.baseUrl}`,employee);
  }
  getEmployeeById(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }
  updateEmployee(id:number,update:Employee) : Observable<Object >
  {
    return  this.http.put(`${this.baseUrl}/${id}`,update)
  }
  deleteEmployee(id:number): Observable<Object>
  {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
