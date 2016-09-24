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


  ngOnInit() {

  }

}
