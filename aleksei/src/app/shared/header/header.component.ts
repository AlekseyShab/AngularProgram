import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
  }

}
