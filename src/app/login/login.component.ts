import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    constructor(private service: EmployeeService, private router: Router) { }

    ngOnInit(): void {
        localStorage.clear();
    }
    


    username: string = "";
    password: string = "";
    show: boolean = false;
    
    clear() {
        this.username = "";
        this.password = "";
        this.show = true;
    }
    submit() {
        console.log(this.username)
        console.log(this.password)
        if(!this.username || !this.password){
            alert("Please check Username/Password");
            return;
        }
        var payload = {
            username: this.username,
            password: this.password
        }
        this.service.authUser(payload).subscribe((res : boolean) =>{
            if(res)
                this.router.navigate(['empolyees']);
            localStorage.setItem("isLogged",JSON.stringify(res));
        })

    }
}
