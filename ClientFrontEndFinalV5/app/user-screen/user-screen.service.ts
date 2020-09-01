import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScreenService {

  private geturl="http://localhost:3000/clientAPI/message";
  private deleteurl="http://localhost:3000/clientAPI/delete";
  constructor(private http: HttpClient) { }

  getMessage():Observable<any>{
    return this.http.get<any>(this.geturl);
  }

  deleteMessage(message: any): Observable<any>{
    return this.http.put<any>(this.deleteurl, message);
  }
}
