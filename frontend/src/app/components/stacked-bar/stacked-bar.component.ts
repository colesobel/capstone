import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.css']
})
export class StackedBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var trace1 = {
      x: [0, 1, 2, 3, 4, 5, 6, 7],
      y: [10, 11, 21, 31, 4, 50, 67, 7],
      name: 'SF Zoo',
      type: 'bar'
    };

    var trace2 = {
      x: [0, 1, 2, 3, 4, 5, 6, 7],
      y: [12, 18, 29, 12, 18, 29],
      name: 'LA Zoo',
      type: 'bar'
    };

    var data = [trace1, trace2];

    var layout = {barmode: 'stack',
                  xaxis: {autorange: 'reversed'}};

    Plotly.newPlot('stacked-bar', data, layout);
  }

}
