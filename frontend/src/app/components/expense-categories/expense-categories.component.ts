import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.css']
})
export class ExpenseCategoriesComponent implements OnInit {

  constructor(private _http: HttpService) { }
  user_id: number;
  expenseCategories: string[] = []

  addCategory(cat) {
    this._http.postData('http://localhost:3000/accountSettings/addExpenseCategories', {user_id: this.user_id, category: cat.value}).subscribe(() => {
      this.getExpenseCategories()
    })
  }

  deleteCategory(catId) {
    console.log(catId);
    this._http.postData('http://localhost:3000/accountSettings/deleteExpenseCategories', {user_id: this.user_id, category: catId}).subscribe(() => {
      this.getExpenseCategories()
    })
  }

  getExpenseCategories = () => {
    this._http.postData('http://localhost:3000/accountSettings/getExpenseCategories', {user_id: this.user_id}).subscribe(categories => {

      this.expenseCategories = categories.map(cat => {
        return {
          id: cat.id,
          expense_category: cat.expense_category,
          percentage: cat.percentage,
          isEditing: false
        }
      })
    }) 
  }

  submitTempExpenses(i, id) {
    this.expenseCategories.forEach(cat => {
      if (cat['id'] == id) {
        cat['expense_category'] = document.getElementById(i + 'expCat')['value']
        cat['percentage'] = document.getElementById(i + 'percentage')['value']
      }
    })
    console.log(this.expenseCategories)
  }

  submitExpensesToDatabase() {
    let total = 0
    this.expenseCategories.forEach(cat => total += Number(cat['percentage']))
    if (total === 100) {
      this._http.postData('http://localhost:3000/accountSettings/updateExpenseCategories', {user_id: this.user_id, expenseCategories: this.expenseCategories}).subscribe(data => {
        console.log(data)
      })
    } else {
      console.log('you suck')
    }
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id')) 
    this.getExpenseCategories()
  }

}
