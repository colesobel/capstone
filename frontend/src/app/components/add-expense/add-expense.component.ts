import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { GetDateService } from '../../services/get-date.service'

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  providers: [HttpService, GetDateService]
})
export class AddExpenseComponent implements OnInit {
  constructor(private _http: HttpService, private _getDate: GetDateService) { }

  user_id: number;

  expenses: string[] = ['expense']

  dateString = new Date().toISOString().substring(0, 10)

  addExpense() {
    this.expenses.push('expense')
  }

  onSubmit() {
    let expenseItems = document.getElementsByClassName('expense-container')
    let expenseObj = {}
    for(let i = 0; i < expenseItems.length; i++) {
      expenseObj[i] = {}
      expenseObj[i].expenseCategory = expenseItems[i]['children'][1]['value']
      let amount = expenseItems[i]['children'][2]['value']
      expenseObj[i].amount = Number(amount).toFixed()
      let date = expenseItems[i]['children'][3]['value']
      expenseObj[i].fullDate = date
      expenseObj[i].unixTimestamp = new Date(date).getTime()
      expenseObj[i].day = this._getDate.getDayName(new Date(date).getDay())
      expenseObj[i].month = this._getDate.getMonthName(new Date(date).getMonth())
      expenseObj[i].year = new Date(date).getFullYear()
    }
    console.log(expenseObj)
    this._http.postData('http://localhost:3000/dailyExpenses/addExpense', {user_id: this.user_id, expenseObj}).subscribe(data => {
      console.log(data)
    })
  }


  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
  }

}
