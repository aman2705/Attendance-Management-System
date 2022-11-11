import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Array<Employee>=[]
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
      this.service.getAllEmployee().subscribe(data=>{
        this.employees=data
      })
  }
  employeeDetails(id:number)
{
  this.router.navigate(['employee-details',id])
}

  
}


