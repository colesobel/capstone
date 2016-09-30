import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [HttpService]
})
export class NavbarComponent implements OnInit {

  constructor(private _http: HttpService) { }
  user_id: Number;
  fullName: string;

  getUserInfo = () => {    
    this._http.postData('http://localhost:3000/login/getUserInfo', {user_id: this.user_id}).subscribe(name => {
      this.fullName = name.first_name + ' ' + name.last_name
    })
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getUserInfo()
  }

}
