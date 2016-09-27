import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { GetDateService } from '../../services/get-date.service'

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.css'],
  providers: [HttpService, GetDateService]
})
export class StackedBarComponent implements OnInit {

  constructor(private _http: HttpService, private _getDate: GetDateService) { }

  user_id: number
  currentMonth: string;
  days: string[];
  averages: number[]

  getDailyAverage = () => {
    this._http.postData('http://localhost:3000/home/getDailyAverage', {user_id: this.user_id, currentMonth: this.currentMonth}).subscribe(data => {
      console.log(data);
      this.days = data.map(day => day.day)
      this.averages = data.map(avg => Number(avg.average).toFixed())
      console.log(this.days)
      console.log(this.averages)
    })
  }

  changeValues = () => {
    console.log('changing values');
    this.data = [
            ["Element", "Density", { role: "style" } ],
            ["Copper", 20.94, "#b87333"],
            ["Silver", 5.49, "blue"],
            ["Gold", 10.30, "pink"],
            ["Platinum", 21.45, "color: #e5e4e2"]
          ]
    google.charts.setOnLoadCallback(this.drawChart);
    
  }
      data = [
            ["Element", "Density", { role: "style" } ],
            ["Copper", 8.94, "#b87333"],
            ["Silver", 10.49, "silver"],
            ["Gold", 19.30, "gold"],
            ["Platinum", 21.45, "color: #e5e4e2"]
          ]

    drawChart = () => {
      var data = google.visualization.arrayToDataTable(this.data);
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

      var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
  

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))

    google.charts.load("current", {packages:['corechart']});

    google.charts.setOnLoadCallback(this.drawChart);

    this.currentMonth = this._getDate.getMonthName(new Date().getMonth())
    this.getDailyAverage()

  }

}
