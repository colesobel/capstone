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

  ngOnInit() {
    this.user_id = Number(localStorage.getItem('user_id'))

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
