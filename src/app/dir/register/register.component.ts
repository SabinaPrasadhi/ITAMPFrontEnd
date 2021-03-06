import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RegisterformService } from '../../service/registerform.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  reguser:User=new User();
  constructor(private router:Router ,private registerService:RegisterformService, private userService:UserService) { } 

 /* registerUser():void{
this..registerUser(this.user)

  }*/
  /*loginUser():void{
    this.userService.loginUser(this.user).subscribe(data =>{
      if(data != null){
        this.logeduser=data;
        
        alert("login success....!!!");
       // console.log(data);
       this.userService.editName(this.logeduser.username);
        this.router.navigate(['/home']);
       
      }
      else {console.log("error");
     alert("invalid username or password");}
    });
    }*/
 createUser(){

  this.registerService.registrationUser(this.user).subscribe(
    data=>{
      alert("new user data added");
    });
 }
  ngOnInit() {
  }

}

