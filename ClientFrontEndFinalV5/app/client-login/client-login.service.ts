import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientLoginService {
   clientUrl="/assets/client.json";
  private dbUrl="";
  constructor(private http: HttpClient) { }

  readClient():Observable<any>{
    console.log("in read client");

    return this.http.get<any>(this.clientUrl);
  }
}
