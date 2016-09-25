import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css'],
  providers: [ HttpService]
})
export class FixedExpensesComponent implements OnInit {

  constructor(private _http: HttpService) { }
  fixedExpenses: string[] = ['expense']
  addExpense() {
    this.fixedExpenses.push('expense')
    
  }
  onSubmit() {
    let expenseItems = document.getElementsByClassName('expense-container')
    let expenseObj = {}
    for(let i = 0; i < expenseItems.length; i++) {
      expenseObj[i] = {}
      expenseObj[i].expenseCategory = expenseItems[i]['children'][1]['value']
      expenseObj[i].amount = expenseItems[i]['children'][2]['value']
    }
    console.log(expenseObj);
    this._http.postData('http://localhost:3000/accountSettings/addFixedExpenses', {user_id: this.user_id, fixed_expenses: expenseObj}).subscribe(data => {
      console.log(data);
    })
  }
  user_id: number;
  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id')) 
  }

}
