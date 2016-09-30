import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { GetDateService } from '../../services/get-date.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService, GetDateService]
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService, private _getDate: GetDateService) { }
  user_id: number
  someCoolValue: number = 40
  someGauge: any = 'someGaugeYo'
  gaugeStats : any[]
  daysInMonth: number
  dayOfMonth: number
  getGaugeStats = () => {
    this._http.postData('http://localhost:3000/dailyExpenses/getGaugeStats', {user_id: this.user_id}).subscribe(gaugeStats => {
      this.gaugeStats = gaugeStats.map(cat => {
        cat.allocated_for_budget = (Number(cat.desired_spend_percentage) / 100) * Number(cat.monthly_income)
        cat.budget_left = cat.allocated_for_budget - Number(cat.spend_total)
        cat.spent_percentage = (Number(cat.spend_total) / cat.allocated_for_budget * 100).toFixed(2)
        cat.budget_left_percentage = (cat.budget_left / cat.allocated_for_budget * 100).toFixed(2)
        return cat
      })
      console.log(this.gaugeStats);
    })
  }

  getDaysInMonth = () => {
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    this.dayOfMonth = new Date().getDate()
    this.daysInMonth = Date.getDaysInMonth(year, month)
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getDaysInMonth()
    this.getGaugeStats()
  }

}
