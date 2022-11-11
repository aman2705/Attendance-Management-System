import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  constructor(private attendanceService:AttendanceService,private router:Router) { }
  empids:Array<number>=[]
  attendance:Attendance=new Attendance()
  ngOnInit(): void {
    this.attendanceService.getEmployeeId().subscribe(data=>{
      this.empids=data
    })
  }
 

  addAttendance()
  {
      // this.aservice.addEmployee(this.emp).subscribe(data=>{
      //   console.log(data)
      //   this.router.navigate(['/empolyees'])
      // },
      // error=>{
      //   console.log(error)
      // })
     this.attendanceService.addAttendance(this.attendance).subscribe(data=>{
      this.router.navigate(['/attendance'])
     })
  }

}