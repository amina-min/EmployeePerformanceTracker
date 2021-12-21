import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted=false;

  user:User = new User();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  save(){
    this.submitted = true;
    const headers = {'content-Type' : 'application/json' }; 
    this.http.post("http://localhost:8080/signup",JSON.stringify(this.user),{headers:headers}).subscribe(data=>{
      console.log(data);
    })
  }
  


}
