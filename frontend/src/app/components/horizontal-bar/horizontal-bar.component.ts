import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit {

  constructor() { }

  @Input() spentPercentage: string
  @Input() budgetLeftPercentage: string
  @Input() dayOfMonth: number
  @Input() daysInMonth: number
  daysPassedPercentage: number
  daysLeftPercentage: number
  ngOnInit() {
    this.daysPassedPercentage = this.dayOfMonth / this.daysInMonth * 100
    this.daysLeftPercentage =100 - this.daysPassedPercentage
  }

}
