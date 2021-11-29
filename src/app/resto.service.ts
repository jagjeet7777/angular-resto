import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/restaurants"
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url)
  }
  saveResto(data: any) {
    return this.http.post(this.url, data)
  }
  deleteResto(itemid: any) {
    return this.http.delete(`${this.url},${itemid}`)
  }
}
