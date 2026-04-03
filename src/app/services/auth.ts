import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http://localhost:3000";
interface IloginPayload {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {
  }
  login(payload: IloginPayload) {
    return this.http.post(API + "/login", payload)
  }
  register(payload: IloginPayload) {
    return this.http.post("http://localhost:3000/register", payload)
  }
}
