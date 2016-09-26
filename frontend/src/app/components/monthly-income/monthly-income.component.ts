import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-monthly-income',
  templateUrl: './monthly-income.component.html',
  styleUrls: ['./monthly-income.component.css'],
  providers: [HttpService]
})
export class MonthlyIncomeComponent implements OnInit {
  user_id: number
  userIncome: number
  constructor(private _http:HttpService) { }

  onSubmit(income) {
    console.log(income.value); 
    this._http.postData('http://localhost:3000/accountSettings/enterIncome', {user_id: this.user_id, income: income.value}).subscribe(data => {
      console.log(data);
    })
  }

  getMonthlyIncome = () => {
    this._http.postData('http://localhost:3000/accountSettings/getIncome', {user_id: this.user_id}).subscribe(income => {
      this.userIncome = income
    })
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getMonthlyIncome()
  }

}
