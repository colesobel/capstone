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
  noIncomeData: boolean = false
  editingIncome: boolean = false
  constructor(private _http:HttpService) { }

  onSubmit(income) {
    this._http.postData('http://localhost:3000/accountSettings/enterIncome', {user_id: this.user_id, income: income.value}).subscribe(data => {
      this.getMonthlyIncome()
    })
  }

  editIncome(updatedIncome) {
    let income = document.getElementById('updatedIncome')['value']
    this._http.postData('http://localhost:3000/accountSettings/updateIncome', {user_id: this.user_id, income}).subscribe(income => {
      this.userIncome = income
      this.editingIncome = false
    })
  }

  getMonthlyIncome = () => {
    this._http.postData('http://localhost:3000/accountSettings/getIncome', {user_id: this.user_id}).subscribe(income => {
      console.log(income);
      if (income) {
        this.userIncome = income
        this.noIncomeData = false
      } else {
        this.noIncomeData = true
      }
      console.log(this.noIncomeData);
    })
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getMonthlyIncome()
  }

}
