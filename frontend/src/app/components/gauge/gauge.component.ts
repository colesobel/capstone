import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  @Input() gauge: any[];
  @Input() options: any;
  @Input() id: any;
  @Input() cardTitle: string
  @Input() desiredSpendPercentage: number;
  @Input() spendPercentage: number;

  drawChart = () => {
    var data = google.visualization.arrayToDataTable(this.gauge);

    var chart = new google.visualization.Gauge(document.getElementById(this.id));

    chart.draw(data, this.options);
  }

  ngOnInit() {

    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(this.drawChart);

  }

}
