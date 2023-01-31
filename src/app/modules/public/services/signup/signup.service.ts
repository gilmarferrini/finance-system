import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Signup } from "../../interfaces/signup";
import { Observable } from "rxjs";
import { User } from "src/app/modules/shared/interfaces/user";

@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient) {}

  signup (userData: Signup): Observable<User | any> {
    return this.httpClient.post<User>('http://localhost:3333/users', userData)
  }

}
