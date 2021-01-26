import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any ={};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user : User=new User();
  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
  }
   onSubmit(){
     this.authService.addUser(this.form).subscribe(
       data=> {
         console.log(data);
       }
     );
   }
}
