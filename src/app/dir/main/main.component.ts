import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router ,private userService:UserService) { }

  registerForm(){
    this.router.navigate(["/register"]);
    console.log("button click");
  }

  ngOnInit() {
  }

}
