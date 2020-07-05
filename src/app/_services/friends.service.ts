// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8050/api/accounts/friends/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class FriendsService {
//   constructor(private http: HttpClient) { }

//   addFriend(parameters): Observable<any> {
//     return this.http.post(
//       AUTH_API + parameters.username,
//       {
//         fname: parameters.fname,
//         lname: parameters.lname,
//         linkedin: parameters.linkedin,
//         twitter: parameters.twitter,
//       },
//       httpOptions
//     );
//   }

//   getFriends(username): Observable<any> {
//     return this.http.get(AUTH_API + username, httpOptions);
//   }
// }
