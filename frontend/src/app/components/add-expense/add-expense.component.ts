import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenses: string[] = ['expense']
  times: string[] = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM'
  ]

  dateString = new Date().toISOString().substring(0, 10)

  addExpense() {
    this.expenses.push('expense')
    
  }

  onSubmit() {
    let expenseItems = document.getElementsByClassName('expense-container')
    let expenseObj = {}
    for(let i = 0; i < expenseItems.length; i++) {
      console.log('hello')
      expenseObj[i] = {}
      expenseObj[i].expenseCategory = expenseItems[i].children[1].value
      expenseObj[i].amount = expenseItems[i].children[2].value
      expenseObj[i].date = expenseItems[i].children[3].value
      expenseObj[i].time = expenseItems[i].children[4].value
    }
    console.log(expenseObj);
  }

  constructor() { }

  ngOnInit() {
  }

}
