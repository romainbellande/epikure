import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials, SignInResponse, UserDto, User } from '@/data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signIn(credentials: Credentials) {
    return this.http.post<SignInResponse>('/auth/signin', credentials, {
      withCredentials: true,
    });
  }

  public signUp(userDto: UserDto) {
    return this.http.post<User>('/auth/signup', userDto);
  }
}
