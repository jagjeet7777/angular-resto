import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/restaurants"
  userUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url)
  }
  saveResto(data: any) {
    return this.http.post(this.url, data)
  }
  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
  registerUser(data: any) {
    return this.http.post(this.userUrl + "/users", data)
  }
}
