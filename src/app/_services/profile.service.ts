import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8050/api/accountinfo/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  update(parameters): Observable<any> {
    return this.http.put(
      AUTH_API + parameters.username,
      {
        fname: parameters.fname,
        lname: parameters.lname,
        linkedin: parameters.linkedin,
        twitter: parameters.twitter,
      },
      httpOptions
    );
  }

  read(username): Observable<any> {
    return this.http.get(AUTH_API + username, httpOptions);
  }
}
