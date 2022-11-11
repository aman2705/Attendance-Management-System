import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {
    path: "empolyees",
    component: EmployeeListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'create',
    component: EmployeeCreateComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'update/:id',
    component: UpdateEmployeeComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'attendance',
    component: AttendanceListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'add-attendance',
    component: AddAttendanceComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'list',
    component:ListComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
