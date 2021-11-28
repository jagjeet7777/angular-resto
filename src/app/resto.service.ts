import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
export interface IRes{
  id:number
  name:string
  address:string
  email:string
}
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants"
  constructor(private http:HttpClient) { }
  getList()
  {
  // return this.http.get(this.url)
  return of([
    {
      "id": 1,
      "name": "KFC restaurant",
      "address": "noida sector 50",
      "email": "kfc@test.com"
    },
    {
      "id": 2,
      "name": "Om sweets",
      "address": "Delhi sector 50",
      "email": "om@test.com"
    },
    {
      "id": 3,
      "name": "MC D",
      "address": "Nodia sector 20",
      "email": "MDC@test.com"
    },
    {
      "id": 4,
      "name": "KFC restaurant 4",
      "address": "noida sector 50 4",
      "email": "kfc4@test.com"
    },
    {
      "id": 5,
      "name": "Om sweets5",
      "address": "Delhi sector 50 5",
      "email": "om5@test.com"
    },
    {
      "id": 6,
      "name": "MC D 6",
      "address": "Nodia sector 206",
      "email": "MDC6@test.com"
    }
  ])
  }
}
