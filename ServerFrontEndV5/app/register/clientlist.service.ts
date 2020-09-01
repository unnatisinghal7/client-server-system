import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientlistService {

  constructor(private http:HttpClient) { 
 
  }
  getClient():Observable<any>
  {
    console.log("getClient");
    return this.http.get<any>("http://localhost:3000/clientApi/client");
  }
  addClient(clientData):Observable<any>{
    console.log("add Client")
    return this.http.put<any>("http://localhost:3000/clientApi/add",clientData);
  }
  deregister(x):Observable<any>{
    console.log("servicedergister");
    console.log(x);
return this.http.put<any>("http://localhost:3000/clientApi/delete",x);
  }
  
  
}
