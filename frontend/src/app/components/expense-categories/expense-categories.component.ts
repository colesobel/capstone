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
      this.expenseCategories = categories
    }) 
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id')) 
    this.getExpenseCategories()
  }

}
