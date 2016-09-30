import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit {

  constructor() { }


  ngOnInit() {
// google.charts.load("current", {packages:["corechart"]});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//       var data = google.visualization.arrayToDataTable([
//         ['Genre', 'Fantasy & Sci Fi', 'Romance'],
//         ['2030', 28, 19]
//       ]);

//       var view = new google.visualization.DataView(data);
//       view.setColumns([0, 1,
//                        { calc: "stringify",
//                          sourceColumn: 1,
//                          type: "string",
//                          role: "annotation" },
//                        2]);

//       var options = {
//         width: 400,
//         height: 150,
//         legend: { position: 'top', maxLines: 3 },
//         // bar: { groupWidth: '75%' },
//         isStacked: true,
//         hAxis.gridlines.count: 0
//       };
//       var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
//       chart.draw(view, options);
//   }
  }

}
