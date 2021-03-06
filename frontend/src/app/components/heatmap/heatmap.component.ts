import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var heatmapInstance = h337.create({
    // only container is required, the rest will be defaults
    container: document.querySelector('.heatmap'),
    radius: 25,
    blur: 0.85,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
    });

    // heatmap data format
    var data = {
      max: 5,
      min: 0,
      data: [{x: 1, y: 1, value: 1}, {x: 2, y: 2, value: 2}, {x: 3, y: 3, value: 3}, {x: 4, y: 4, value: 4}, {x: 300, y: 300, value: 5}, {x: 400, y: 400, value: 5}]
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);
  }

}
