import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
  providers: [ HttpService]
})
export class AccountSettingsComponent implements OnInit {
  selectedTab: string = 'expenseCategories'

  selectTab(li, name) {
    let tabs = document.getElementsByTagName('li')
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].className = ''
    }
    li.className = 'selected'
    this.selectedTab = name
  }


  constructor(private _http: HttpService) { }
  user_id: number;
  expenseCategories: string[] = []

  addCategory(cat) {
    this._http.postData('http://localhost:3000/accountSettings/addExpenseCategories', {user_id: this.user_id, category: cat.value}).subscribe(category => {
      this.getExpenseCategories()
    })
  }

  getExpenseCategories = () => {
    this._http.postData('http://localhost:3000/accountSettings/getExpenseCategories', {user_id: this.user_id}).subscribe(categories => {
      this.expenseCategories = categories.map(cat => cat.expense_category)
    }) 
  }

  ngOnInit() {
    this.user_id = localStorage.getItem('user_id') 
    this.getExpenseCategories()
  }

}
