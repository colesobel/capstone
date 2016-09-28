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
  expenseCategories: any[] = []
  percentageTotal: number

  getPercentageTotal() {
    let total = 0
    this.expenseCategories.forEach(cat => total += Number(cat['percentage']))
    this.percentageTotal = total
  }

  addCategory(cat) {
    this.expenseCategories.push({
      id: cat,
      expense_category: cat.value,
      percentage: 0,
      isEditing: false
    })
  }

  deleteCategory(catId) {
    for(let i = 0; i < this.expenseCategories.length; i++) {
      if (this.expenseCategories[i]['id'] == catId) {
        this.expenseCategories.splice(i, 1)
      }
    }
    this.getPercentageTotal()
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
      this.getPercentageTotal()
    }) 
  }

  submitTempExpenses(i, id) {
    this.expenseCategories.forEach(cat => {
      if (cat['id'] == id) {
        cat['expense_category'] = document.getElementById(i + 'expCat')['value']
        cat['percentage'] = document.getElementById(i + 'percentage')['value']
      }
    })
    this.getPercentageTotal()
  }

  submitExpensesToDatabase() {
    let total = 0
    this.expenseCategories.forEach(cat => total += Number(cat['percentage']))
    if (total === 100) {
      this._http.postData('http://localhost:3000/accountSettings/updateExpenseCategories', {user_id: this.user_id, expenseCategories: this.expenseCategories}).subscribe(data => {
        console.log(data)
      })
    } else {
      console.log('you suck at math')
    }
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id')) 
    this.getExpenseCategories()
  }

}
