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
  getGaugeStats = () => {
    this._http.postData('http://localhost:3000/dailyExpenses/getGaugeStats', {user_id: this.user_id}).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getGaugeStats()
  }

}
