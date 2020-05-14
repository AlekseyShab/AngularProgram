import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { login } from './authState/login.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(
      localStorage.getItem('isAuth') === 'true'
  );

  constructor(private router: Router, private http: HttpClient, private store: Store) { }

  isAuth(name,password,value) {
    for(let item of value){
      if(item.firstName == name && item.password == password){
        this.setItemsInLocalStorage(name);
        return this.router.navigate(['courses']);
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
    this.store.dispatch(login({username: name, isAuth: true}));
    this.loggedInSubject.next(true);
  }

  private removeUserInfoFromLocalStorage(): void {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName');
    this.loggedInSubject.next(false);
  }

  login(name,password) {
    this.http.get('http://localhost:3000/users').subscribe((value) =>{
      this.isAuth(name,password,value)
    })
  }
}
