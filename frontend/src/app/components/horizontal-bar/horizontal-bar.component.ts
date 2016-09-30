import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit {

  constructor() { }

  @Input() spentPercentage: string;
  @Input() budgetLeftPercentage: string
  ngOnInit() {

  }

}
