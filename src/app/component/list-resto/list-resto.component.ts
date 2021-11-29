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
  ngOnInit(): void {
    this.resto.getList().subscribe((result: any) => {
      this.collection = result;
    })
  }
  deleteResto(item: any) {
    this.resto.deleteResto(item - 1).subscribe((result: any) => {
      console.warn(result);
      this.collection.splice(item-1,1)
    })

  }
}


