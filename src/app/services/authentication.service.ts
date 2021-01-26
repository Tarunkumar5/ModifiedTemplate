import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../model/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private status : boolean;

  constructor(private httpClient : HttpClient ) { }


validateUser(email : string) : Observable<User>
{
return this.httpClient.get<User>(`http://localhost:8080/api/v1/users/validateUser/${email}`) 
}

addUser(user) : Observable<any> {
  return this.httpClient.post('http://localhost:8080/api/v1/users/adduser', {
    username: user.username,
    email: user.email,
    password: user.password
  }, httpOptions);
}

setBearerToken(token : string)
{
   localStorage.setItem('bearerToken',token);
}

setStatus ( status : boolean )
{
  this.status=status;
}
getStatus () : boolean
{
  return this.status;
}

getBearerToken()
{
  return localStorage.getItem('bearerToken');
}


}
