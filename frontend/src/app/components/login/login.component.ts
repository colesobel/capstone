import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _http: HttpService) { }

  blockLogin = false
  blockSignup = false


  login(username, password) {
    let loginInfo = {}
    loginInfo['username'] = username.value
    loginInfo['password'] = password.value
    this._http.postData('http://localhost:3000/login/login', loginInfo).subscribe(data => {
      if (data) {
        localStorage.setItem('user_id', data)
        this._router.navigate(['/home'])
      } else {
        this.blockLogin = true
      }
    })
  } 

  signUp(firstName, lastName, username, password, passwordConfirmation) {
    if (password.value !== passwordConfirmation.value) {
      console.log('passwords must match');
      return
    }
    let signupInfo = {}
    signupInfo['firstName'] = firstName.value
    signupInfo['lastName'] = lastName.value
    signupInfo['username'] = username.value
    signupInfo['password'] = password.value
    this._http.postData('http://localhost:3000/login/signup', signupInfo).subscribe(data => {
      localStorage.setItem('user_id', data)
      if (data) {
        this._router.navigate(['/settings'])
      } else {
        this.blockSignup = true
      }
    })
  }

  ngOnInit() {
  }

}
