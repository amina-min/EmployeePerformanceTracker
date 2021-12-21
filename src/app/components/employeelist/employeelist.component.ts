import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../dashbord/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private http: HttpClient, private router: Router, private toastr:ToastrService) {
    this.loadEmployee();
  }
  Employees: any = [];
  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {


  }


  toggleProductList() {
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }


  loadEmployee() {    
    const headers = { 'content-Type': 'application/json' };
    this.http.post<any>('http://localhost:8080/employee/getAll', { headers: headers }).subscribe(employees => {
      console.log(employees);
      this.Employees = employees;
    })
  }

  getFormattedDate(ts:any){
return new Date(ts).toLocaleDateString('en-BD')
  }

  editEmployee(employee: any) {
    this.router.navigate(['home'],{state:{emp:employee, isSave:false}})    
    this.employee.id = employee.id;
    this.employee.firstname = employee.firstname;
    this.employee.lastname = employee.lastname;
    this.employee.email = employee.email;
    this.employee.gender = employee.gender;
    this.employee.qualification = employee.qualification;
    this.employee.department = employee.department;
    this.employee.date_of_birth = employee.date_of_birth;
    this.employee.nationality = employee.nationality;
    this.employee.employeementHistory = employee.employeementHistory;
  }

  deleteEmployee(employee: any) {
    this.toastr.success("Employee delete success")
    const headers = { 'content-Type': 'application/json' };
    this.http.get("http://localhost:8080/employee/delete/" + employee.id, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("")
      })
  }


  

}
