import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegisterformService } from '../../service/registerform.service';
import { Router,RouterModule} from '@angular/router';
import { UserService } from '../../service/user.service';
import { User} from 'src/app/model/user';





@Component({
  selector: 'app-removeuser',
  templateUrl: './removeuser.component.html',
  styleUrls: ['./removeuser.component.css']
})
export class RemoveuserComponent implements OnInit {


user:User=new User();

  constructor(private router: Router , private registerService:RegisterformService,
    private userService:UserService) { }


userView(){
this.router.navigate(["/admin"]);
    console.log("button click");
}
userviewForm(){
  this.router.navigate(["/admin"]);
  console.log("button click");
}

removeUser(){
  this.registerService.deleteUser(this.user.id).subscribe(
    data=>{
      alert("User removed from the system.");
    });

}

  ngOnInit() {


  
}}
