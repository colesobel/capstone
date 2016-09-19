import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login(username, password) {
    let loginInfo = {}
    loginInfo['username'] = username.value
    loginInfo['password'] = password.value
    console.log(loginInfo)
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
    console.log(signupInfo);
  }

  ngOnInit() {
  }

}
