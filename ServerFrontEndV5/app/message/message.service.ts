import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  getClient():Observable<any>
  {
    console.log("getClient");
    return this.http.get<any>("http://localhost:3000/clientApi/client");
  }
  sendMessage(pattern):Observable<any>{
    return this.http.put<any>("http://localhost:3000/clientApi/sendmsg",pattern)
  }
}
 