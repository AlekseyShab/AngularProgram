import { Injectable } from '@angular/core';
import { User } from '../user/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(
      localStorage.getItem('isAuth') === 'true'
  );

  users: User[] = [
    {
      id:'1',
      firstName:'Alex',
      lastName:'Ivanov',
      password: '123'
    },
    {
      id:'2',
      firstName:'Vasya',
      lastName:'Kyzichev',
      password: '321'
    }
  ];

  constructor(private router: Router) { }

  isAuth(name,password) {
    for(let item of this.users){
      if(item.firstName == name && item.password == password){
        this.setItemsInLocalStorage(name);
        return this.router.navigate(['courses-page']);
      }
    }
    alert('User is not authenticated');
    throw new Error('Auth Error');
  }

  getUserInfo(): string {
    return localStorage.getItem('userName')
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  logOut() {
    this.removeUserInfoFromLocalStorage();
    this.router.navigate(['login'])
  }

  private setItemsInLocalStorage(name): void {
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('userName', name);
    console.log('logged in successfully');
    this.loggedInSubject.next(true);
  }

  private removeUserInfoFromLocalStorage(): void {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
    this.loggedInSubject.next(false);
  }
}
