import { Component, OnInit, Input } from '@angular/core';
import { GetColorService } from '../../services/get-color.service'

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
  providers: [GetColorService]
})
export class GaugeComponent implements OnInit {

  constructor(private _getColor: GetColorService) { }


  @Input() nodeId: any;
  @Input() cardTitle: string
  @Input() desiredSpendPercentage: number;
  @Input() spendPercentage: number;
  @Input() gaugeMax: number;


  ngOnInit() {
    if (this.spendPercentage > this.gaugeMax) {
      this.gaugeMax = this.spendPercentage
    }

    if (this.spendPercentage == 0) {
      this.spendPercentage = 0.01
    }

    let color = this._getColor.getColor(this.spendPercentage/ this.gaugeMax)
    

  var opts = {
  lines: 12, // The number of lines to draw
  angle: 0.0, // The length of each line
  lineWidth: 0.44, // The line thickness
  pointer: {
    length: 0.6, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
  colorStart: color,   // Colors
  colorStop: color,    // just experiment with them
  strokeColor: '#E0E0E0',   // to see which ones work best for you
  generateGradient: true
};
let target = document.getElementsByClassName('gauge')[this.nodeId]
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!


gauge.maxValue = this.gaugeMax; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(this.spendPercentage); // set actual value
  }

}
