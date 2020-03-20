import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  usersFormGroup: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usersFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  login(): void {
    const user = {
      name: this.usersFormGroup.controls.name.value,
      password: this.usersFormGroup.controls.password.value
    };
    this.authService
        .isAuth(user.name,user.password)
  }

}
