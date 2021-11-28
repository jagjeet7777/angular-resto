import { Component, OnInit } from '@angular/core';
import { IRes, RestoService } from 'src/app/resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:IRes[]=[]
  ngOnInit(): void { 
    
    this.resto.getList().subscribe((result:IRes[])=>{
      console.warn(result);
      this.collection=result;
    })
        
        
    }
  }


