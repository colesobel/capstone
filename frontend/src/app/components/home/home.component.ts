import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('username'))
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


    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }

    var z_data=[ ]
    for(let i=0; i<24; i++){
      z_data.push(unpack(rows,i));
    }

    var data = [{
              z: z_data,
              type: 'surface'
            }];

    var layout = {
      title: 'Mt Bruno Elevation',
      autosize: false,
      width: 500,
      height: 500,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };
    Plotly.newPlot('myDiv', data, layout);
    });



  }

}
