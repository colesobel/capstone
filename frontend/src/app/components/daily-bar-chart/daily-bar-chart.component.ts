import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
@Component({
  selector: 'app-daily-bar-chart',
  templateUrl: './daily-bar-chart.component.html',
  styleUrls: ['./daily-bar-chart.component.css'],
  providers: [HttpService]
})
export class DailyBarChartComponent implements OnInit {
  user_id: number
  getDailyAvgs = () => {
    this._http.postData('http://localhost:3000/dailyExpenses/getDailyAverages', {user_id: this.user_id}).subscribe(data => {
      console.log(data);
    })
  }

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))
    this.getDailyAvgs()
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Average Daily Spending",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("daily-avg-bar"));
      chart.draw(view, options);
  }
  }

}
