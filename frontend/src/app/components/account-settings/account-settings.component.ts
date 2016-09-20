import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
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


  constructor() { }

  ngOnInit() {
  }

}
