import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

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
      expenseObj[i].amount = expenseItems[i]['children'][2]['value']
      expenseObj[i].date = expenseItems[i]['children'][3]['value']
    }
    console.log(expenseObj);
  }

  constructor() { }

  ngOnInit() {
  }

}
