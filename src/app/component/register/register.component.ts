import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public signupForm!:FormGroup;
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        mobile:['',Validators.required],
         email:['',Validators.required],
         password:['',Validators.required],
         passConfirm:['',Validators.required]
         
      })
    }

    signUp(){
      this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
      .subscribe(result=>{
        alert("signup Successfull")
        this.signupForm.reset();
        this.router.navigate(['login'])
      })
    }

    
}
