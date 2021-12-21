import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:StorageService, private router:Router) { }

  ngOnInit(): void {

  }

  logout(){
    this.service.logout();
    this.router.navigateByUrl("login");
  }

  employeeInformation(){
    this.router.navigateByUrl("home");
  }

  

  toggleProductList(){
    this.router.navigateByUrl("list");
  }
 


  main(){
    this.router.navigateByUrl("main");
  }


}
