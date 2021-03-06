import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collection:any=[];
  alert:boolean=false
  ngOnInit(): void {
    this.resto.getList().subscribe((result: any) => {
      this.collection = result;
    })
  }
  deleteResto(item: any) {
   // console.warn(item);
   this.resto.deleteResto(item).subscribe((result)=>{
      console.warn(result);
      this.alert=true 
      this.collection.splice(item-1,1)
   })
   this.collection.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}


