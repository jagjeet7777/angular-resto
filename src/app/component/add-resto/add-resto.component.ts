import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
 })
 
 constructor(private resto:RestoService) { }
 alert:boolean=false
   ngOnInit(): void {
  }

  collectResto(){
     this.resto.saveResto(this.addResto.value).subscribe((result:any)=>{
      this.alert=true       
     })
     this.addResto.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
