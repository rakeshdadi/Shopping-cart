import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginDetails: any): Observable<any> {
    return this.http.get("http://localhost:4200/assets/mock/login.json", loginDetails)
  }
}
