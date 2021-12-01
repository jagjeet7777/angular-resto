import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from 'src/app/resto.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private resto: RestoService) { }
  alert:boolean=false
  ngOnInit(): void {
  }


  registUser() {
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result: any) => {
      console.warn(result);
      this.alert=true
    })
    this.register.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
